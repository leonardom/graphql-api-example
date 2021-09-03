const { getData, createData } = require("./data.js");

const getStyles = (breweryId) => {
  const styles = getData("beers", "breweryId", breweryId).map(
    (beer) => beer.style
  );
  const uniqueStyles = [...new Set(styles)];
  return uniqueStyles.map((style) => ({
    name: style,
  }));
};

const resolvers = {
  Query: {
    greeting: () => "Hello World",
    breweries: (obj, args) => getData("breweries", "id", args.id),
    styles: (obj, args) => getStyles(),
  },
  Style: {
    beers: (obj, args, _, info) => {
      return getData("beers", "style", obj.name);
    },
  },
  Brewery: {
    styles: (obj, args) => {
      return getStyles(obj.id);
    },
  },
  Mutation: {
    createBeer: (obj, args) => createData("beers", args.input),
  },
};

module.exports = {
  resolvers,
};
