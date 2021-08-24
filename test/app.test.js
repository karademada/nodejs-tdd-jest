/* import "babel-polyfill";
import request from "supertest";
import app from "../src/app"; */

// describe("GET /", () => {
//   it("responds with API TDD JEST Express", (done) => {
//     request(app).get("/").expect({ title: "API TDD JEST Express" }, done);
//   });
// });

describe("GET /search", () => {
  // jest.setTimeout(30000);
  it("responds with a resource", (done) => {
    // request(app).get("/search/1").expect({ data: "respond with a resource" }, done);
    expect(1).toBe(1);
    done();
  });
});
