const { mockRequest } = require("../__mocks__/fake.car.routes");

const request = mockRequest();

describe("UserBodyValidator", () => {
    it("should return true if body is invalid", () => {
        request.body = {
            model: "Ferrari",
            year: 2019,
            price: 2200,
            color: "Gold",
            turbo: "yes",
        };
        expect(invalidBody(request)).toBe(true);
    });
    it("should return false if body is valid", () => {
        request.body = {
            model: "Ferrari",
            year: 2019,
            price: 2200,
            color: "Gold",
        };
        expect(invalidBody(request)).toBe(false);
    });
});
