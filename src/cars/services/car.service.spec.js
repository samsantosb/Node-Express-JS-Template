const { fakeId, updatedCar, fakeCars } = require("./../__mocks__/fake.car.data");
const { fakeCarRepository } = require("../__mocks__/fake.car.repository");
const { CarService } = require("./car.service");
const { describe, it, expect } = global;

const carService = new CarService(fakeCarRepository);

describe("car Service", () => {
    describe("getAll", () => {
        it("should return all cars", async () => {
            const cars = await carService.getAll();
            expect(cars).toEqual(fakeCars);
        });
        it("should return an empty array if there is no cars", async () => {
            jest.spyOn(fakeCarRepository, "getAll").mockResolvedValueOnce([]);
            const cars = await carService.getAll();
            expect(cars).toEqual([]);
        });
        it("should call CarRepository.getAll method", () => {
            jest.spyOn(fakeCarRepository, "getAll");
            carService.getAll();
            expect(fakeCarRepository.getAll).toHaveBeenCalled();
        });
        it("should send the correct message if a promise Error Occurs", async () => {
            jest.spyOn(fakeCarRepository, "getAll").mockRejectedValueOnce("Error");
            const cars = await carService.getAll();
            expect(cars).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });

    describe("getById", () => {
        it("should return a car", async () => {
            const car = await carService.getById(fakeId);
            expect(car).toEqual(fakeCars[0]);
        });
        it("should call CarRepository.getById method", () => {
            jest.spyOn(fakeCarRepository, "getById");
            carService.getById(fakeId);
            expect(fakeCarRepository.getById).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeCarRepository, "getById").mockRejectedValueOnce("Error");
            const car = await carService.getById(fakeId);
            expect(car).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
        it("should send an error message if the id is invaliod", async () => {
            const car = await carService.getById("invalidId");
            expect(car).toEqual({
                invalidIdError: {
                    message: "Invalid id",
                    id: "invalidId",
                },
            });
        });
    });

    describe("create", () => {
        it("should create a car", async () => {
            const car = await carService.create(fakeCars[0]);
            expect(car).toEqual(fakeCars[0]);
        });
        it("should call CarRepository.create method", () => {
            jest.spyOn(fakeCarRepository, "create");
            carService.create(fakeCars[0]);
            expect(fakeCarRepository.create).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeCarRepository, "create").mockRejectedValueOnce("Error");
            const car = await carService.create(fakeCars[0]);
            expect(car).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
    });

    describe("update", () => {
        it("should update a car", async () => {
            const car = await carService.update(fakeId, updatedCar);
            expect(car).toEqual(updatedCar);
        });
        it("should call CarRepository.update method", () => {
            jest.spyOn(fakeCarRepository, "update");
            carService.update(fakeId, updatedCar);
            expect(fakeCarRepository.update).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeCarRepository, "update").mockRejectedValueOnce("Error");
            const car = await carService.update(fakeId, updatedCar);
            expect(car).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
        it("should send an error message if the id is invaliod", async () => {
            const car = await carService.update("invalidId", updatedCar);
            expect(car).toEqual({
                invalidIdError: {
                    message: "Invalid id",
                    id: "invalidId",
                },
            });
        });
    });

    describe("delete", () => {
        it("should delete a car", async () => {
            const car = await carService.delete(fakeId);
            expect(car).toEqual(fakeCars[0]);
        });
        it("should call CarRepository.delete method", () => {
            jest.spyOn(fakeCarRepository, "delete");
            carService.delete(fakeId);
            expect(fakeCarRepository.delete).toHaveBeenCalled();
        });
        it("should send an error message in catch sentence", async () => {
            jest.spyOn(fakeCarRepository, "delete").mockRejectedValueOnce("Error");
            const car = await carService.delete(fakeId);
            expect(car).toEqual({
                promiseError: { error: "Error", message: "Promise Error" },
            });
        });
        it("should send an error message if the id is invaliod", async () => {
            const car = await carService.delete("invalidId");
            expect(car).toEqual({
                invalidIdError: {
                    message: "Invalid id",
                    id: "invalidId",
                },
            });
        });
    });
});
