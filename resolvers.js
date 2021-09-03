const { getData, createData } = require("./data.js");

const resolvers = {
  Query: {
    greeting: () => "Hello World",
    breweries: (obj, args) => getData("breweries", "id", args.id),
    styles: (obj, args) => getData("styles", "id", args.id),
  },
  Style: {
    beers: (obj, args, _, info) => {
      console.log(JSON.stringify(info, null, 2));
      return getData("beers", "styleId", obj.id);
    },
  },
  Brewery: {
    styles: (obj, args) => {
      const styleIds = getData("beers", "breweryId", obj.id).map(
        (beer) => beer.styleId
      );
      const uniqueStyleIds = [...new Set(styleIds)];
      return getData("styles").filter(({ id }) => uniqueStyleIds.includes(id));
    },
  },
  Mutation: {
    createBeer: (obj, args) => createData("beers", args.input),
  },
};

module.exports = {
  resolvers,
};
