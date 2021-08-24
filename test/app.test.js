import request from "supertest";
import app from "../src/subscribers/services/search/scripts/routes/app";

describe("GET /", () => {
  it("responds with API TDD JEST Express", (done) => {
    request(app).get("/").expect({ title: "API TDD JEST Express" }, done);
  });
});

describe("GET /users", () => {
  it("responds with a resource", (done) => {
    request(app).get("/users").expect({ data: "respond with a resource" }, done);
  });
});
