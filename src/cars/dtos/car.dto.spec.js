const { fakeCars } = require("./../__mocks__/fake.car.data");
const { CarDto } = require("./car.dto");

const car = new CarDto(fakeCars[0]);

describe("CarDto", () => {
    it("should be defined", () => {
        expect(car).toBeDefined();
    });
    it("should have name", () => {
        expect(car.model).toBeDefined();
    });
    it("should have email", () => {
        expect(car.year).toBeDefined();
    });
    it("should have age", () => {
        expect(car.price).toBeDefined();
    });
    it("should have cpf", () => {
        expect(car.color).toBeDefined();
    });
});
