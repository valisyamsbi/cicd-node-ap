const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return message", async () => {
    const res = await request(app);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("CI/CD Pipeline is Working 🚀");
  });
});