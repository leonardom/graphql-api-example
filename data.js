const data = {
  breweries: [
    {
      id: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      name: "Dadiva",
      description:
        "Descubra um novo horizonte.\nA Dádiva é uma microcervejaria localizada no interior de São Paulo, entre as Serras do Cristal e do Japi.",
    },
    {
      id: "357cac47-fccc-4b2a-ae3b-f147cca12199",
      name: "Everbrew",
      description:
        "Everbrew é uma cervejaria de Santos, que produz cervejas altamente lupuladas.",
    },
    {
      id: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      name: "Dogma",
      description:
        "Melhor Cervejaria Brasileira de 2015 e 2017 segundo o RateBeer! Nosso objetivo é mudar a sua visão sobre cerveja!",
    },
    {
      id: "bbf7ab12-be2d-4e96-a50b-dc6f7b440920",
      name: "UX Brew",
      description:
        "UX Brew traz um novo significado ao mundo das cervejas artesanais.",
    },
  ],
  styles: [
    {
      id: 1,
      name: "Lager/Pilsner",
    },
    {
      id: 2,
      name: "American Pale Ale",
    },
    {
      id: 3,
      name: "IPA/Double IPA/Triple IPA",
    },
    {
      id: 4,
      name: "Session IPA",
    },
    {
      id: 5,
      name: "Witbier",
    },
  ],
  beers: [
    {
      id: 624000623,
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 1,
      name: "Cerveja Dádiva Premium Lager 310ml",
      price: 12.9,
    },
    {
      id: "0000634001485",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 1,
      name: "Cerveja Dádiva + Mafiosa Ma Che! 473ml",
      price: 22.0,
    },
    {
      id: "0000634001485",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 1,
      name: "Cerveja Dádiva + Mafiosa Ma Che! 473ml",
      price: 22.9,
    },
    {
      id: "0736532206978",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 1,
      name: "Cerveja Dogma Rest in Pilz 350ml",
      price: 21.9,
    },
    {
      id: "000000010436",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 1,
      name: "Cerveja Dogma Hamurabi 473ml",
      price: 26.9,
    },
    {
      id: "00000009439",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 2,
      name: "Cerveja Dogma American Pale Ale 473ml",
      price: 23.9,
    },
    {
      id: "00000008603",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 2,
      name: "Cerveja Dogma 1/2 Rizoma 473ml",
      price: 27.9,
    },
    {
      id: "00000010559",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 2,
      name: "Cerveja Dogma Zappa 473ml",
      price: 29.9,
    },
    {
      id: "SOR000473",
      breweryId: "357cac47-fccc-4b2a-ae3b-f147cca12199",
      styleId: 2,
      name: "Cerveja Everbrew Simple Orange 473ml",
      price: 31.9,
    },
    {
      id: "624000729",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 3,
      name: "Cerveja Dádiva India Pale Ale 310ml",
      price: 9.9,
    },
    {
      id: "634001160",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 3,
      name: "Cerveja Dádiva Carmel Beach 473ml",
      price: 24.9,
    },
    {
      id: "634001093",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 3,
      name: "Cerveja Dádiva Laguna Beach 473ml",
      price: 28.9,
    },
    {
      id: "iPA000473STR",
      breweryId: "357cac47-fccc-4b2a-ae3b-f147cca12199",
      styleId: 3,
      name: "Cerveja Everbrew Everipa 473ml",
      price: 32.9,
    },
    {
      id: "IMM000473",
      breweryId: "357cac47-fccc-4b2a-ae3b-f147cca12199",
      styleId: 3,
      name: "Cerveja Everbrew Immortality 473ml",
      price: 32.9,
    },
    {
      id: "DOC000473",
      breweryId: "357cac47-fccc-4b2a-ae3b-f147cca12199",
      styleId: 3,
      name: "Cerveja Everbrew Double Oceania 473ml",
      price: 29.9,
    },
    {
      id: "G2812",
      breweryId: "357cac47-fccc-4b2a-ae3b-f147cca12199",
      styleId: 3,
      name: "Cerveja Everbrew Enjoy the Summer 473ml",
      price: 29.9,
    },
    {
      id: "7567",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 3,
      name: "Cerveja Dogma Hop Lover 473ml",
      price: 29.9,
    },
    {
      id: "5679",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 3,
      name: "Cerveja Dogma Mosaic Lover 473ml",
      price: 35.9,
    },
    {
      id: "10561",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 3,
      name: "Cerveja Dogma Epiphany 473ml",
      price: 39.9,
    },
    {
      id: "SBIPALT473",
      breweryId: "bbf7ab12-be2d-4e96-a50b-dc6f7b440920",
      styleId: 3,
      name: "Cerveja Supla Ipa 473ml",
      price: 16.72,
    },
    {
      id: "634001039",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 4,
      name: "Cerveja Dádiva Venice Beach 473ml",
      price: 19.9,
    },
    {
      id: "624000673",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 4,
      name: "Cerveja Dádiva Session Ipa 310ml",
      price: 9.9,
    },
    {
      id: "4STS000473",
      breweryId: "357cac47-fccc-4b2a-ae3b-f147cca12199",
      styleId: 4,
      name: "Cerveja Everbrew 4Ever Santos 473ml",
      price: 26.9,
    },
    {
      id: "07365328774",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 4,
      name: "Cerveja Dogma Hop Little Lover 473ml",
      price: 26.9,
    },
    {
      id: "624000671",
      breweryId: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21",
      styleId: 4,
      name: "Cerveja Dádiva Witbier 310ml",
      price: 12.9,
    },
    {
      id: "624000671",
      breweryId: "974d78a4-1300-4a3c-9431-dd61fd68b69a",
      styleId: 5,
      name: "Cerveja Dogma Oblivion III 473ml",
      price: 24.9,
    },
  ],
};

const getData = (collection, field, id) => {
  return data[collection].filter((item) => item[field] === id || !field || !id);
};

const createData = (collection, newItem) => {
  data[collection].push(newItem);
  return newItem;
};

module.exports = {
  getData,
  createData,
};
