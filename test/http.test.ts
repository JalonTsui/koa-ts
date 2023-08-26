import run from "../app";
import request from "supertest";
import type { Server } from "http";

describe("http test", () => {
  let server: Server;

  beforeAll(() => {
    server = run(9999);
  });

  it("Get / admin", () => {
    return request(server)
      .get("/admin")
      .expect(200)
      .then((res) => {
        expect(res.text).toBe("hello world");
      });
  });

  afterAll(() => {
    server.close();
  });
});
