const { car } = require("./car.factory");

describe("CarFactory", () => {
    it("should create the car Domain", () => {
        expect(car).toBeDefined();
    });
});
