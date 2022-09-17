const { fakeCarModel } = require("../__mocks__/fake.car.model");
const { fakeCars, fakeId, updatedCar } = require("../__mocks__/fake.car.data");
const { CarRepository } = require("./car.repository");
const { describe, it, expect } = global;

const carRepository = new CarRepository(fakeCarModel);

describe("car Repository", () => {
    describe("getAll", () => {
        it("should return all cars", async () => {
            const cars = await carRepository.getAll();
            expect(cars).toEqual(fakeCars);
        });
        it("should return an empty array if there is no cars", async () => {
            jest.spyOn(fakeCarModel, "find").mockResolvedValueOnce([]);
            const cars = await carRepository.getAll();
            expect(cars).toEqual([]);
        });
        it("should call carModel.find method", () => {
            jest.spyOn(fakeCarModel, "find");
            carRepository.getAll();
            expect(fakeCarModel.find).toHaveBeenCalled();
        });
    });
    describe("getcarById", () => {
        it("should return a car", async () => {
            const car = await carRepository.getById(fakeId);
            expect(car).toEqual(fakeCars[0]);
        });
        it("should return an enpty object if car is not found", async () => {
            jest.spyOn(fakeCarModel, "findById").mockResolvedValueOnce(null);
            const result = await carRepository.getById(fakeId);
            expect(result).toEqual({});
        });
        it("should call carModel.findById method", () => {
            jest.spyOn(fakeCarModel, "findById");
            carRepository.getById(fakeId);
        });
    });
    describe("create", () => {
        it("should create a car", async () => {
            const car = await carRepository.create(fakeCars[0]);
            expect(car).toEqual(fakeCars[0]);
        });
        it("should call carModel.create method", () => {
            jest.spyOn(fakeCarModel, "create");
            carRepository.create(fakeCars[0]);
            expect(fakeCarModel.create).toHaveBeenCalled();
        });
    });
    describe("update", () => {
        it("should update a car", async () => {
            const car = await carRepository.update(fakeId, updatedCar);
            expect(car).toEqual(updatedCar);
        });
        it("should call carModel.findByIdAndUpdate method", () => {
            jest.spyOn(fakeCarModel, "findByIdAndUpdate");
            carRepository.update(fakeId, fakeCars[0]);
            expect(fakeCarModel.findByIdAndUpdate).toHaveBeenCalled();
        });
        it("should return an empty object if car is not found", async () => {
            jest
                .spyOn(fakeCarModel, "findByIdAndUpdate")
                .mockResolvedValueOnce(null);
            const result = await carRepository.update(fakeId, fakeCars[0]);
            expect(result).toEqual({});
        });
    });
    describe("delete", () => {
        it("should delete a car", async () => {
            const car = await carRepository.delete(fakeId);
            expect(car).toEqual(fakeCars[0]);
        });
        it("should call carModel.findByIdAndDelete method", () => {
            jest.spyOn(fakeCarModel, "findByIdAndDelete");
            carRepository.delete(fakeId);
            expect(fakeCarModel.findByIdAndDelete).toHaveBeenCalled();
        });
        it("should return an empty object if car is not found", async () => {
            jest
                .spyOn(fakeCarModel, "findByIdAndDelete")
                .mockResolvedValueOnce(null);
            const result = await carRepository.delete(fakeId);
            expect(result).toEqual({});
        });
    });
});
