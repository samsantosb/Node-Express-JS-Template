const { CarModel } = require("./car.model");
const { describe, it, expect } = global;

describe("CarrModel", () => {
    it("should create the car model", () => {
        expect(CarModel).toBeDefined();
    });
});
