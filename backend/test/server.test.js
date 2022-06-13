const app = require("../index");
const supertest = require("supertest");

describe("test db connection", () => {

    test("GET /test-db-connection", async () => {
        await supertest(app)
            .get("/test-db-connection")
            .expect(200)
            .then((res) => {
                expect(res.text).toBe("Connected");
            });
    });
});