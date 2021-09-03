const { gql } = require("apollo-server");
const { server } = require("./server");

describe("GraphQL Server", () => {
  describe("Hello World Query", () => {
    it("should return a 'Hello World' message", async () => {
      const helloQuery = gql`
        query greeting {
          greeting
        }
      `;
      const res = await server.executeOperation({
        query: helloQuery,
        variables: {},
      });
      expect(res.data.greeting).toBe("Hello World");
    });
  });

  describe("Brewery Query", () => {
    it("should return a list with a brewery when a valid id is provided", async () => {
      const breweryQuery = gql`
        query breweries($id: String) {
          breweries(id: $id) {
            id
            name
          }
        }
      `;
      const res = await server.executeOperation({
        query: breweryQuery,
        variables: { id: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21" },
      });
      expect(res.data).toEqual({
        breweries: [
          { id: "5bdf8f3d-77cd-42f1-b8fc-50f36725da21", name: "Dadiva" },
        ],
      });
    });
  });

  describe("Styles Query", () => {
    it("should return a list of styles", async () => {
      const stylesQuery = gql`
        query styles {
          styles {
            id
            name
          }
        }
      `;
      const res = await server.executeOperation({
        query: stylesQuery,
        variables: {},
      });
      expect(res.data.styles.length).toBe(5);
    });
  });
});
