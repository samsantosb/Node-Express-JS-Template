const { promiseError, invalidIdError } = require("../../utils/error.handler");
const { Types } = require("mongoose");

class CarService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }

    async getAll() {
        try {
            const cars = await this.carRepository.getAll();

            return cars;
        } catch (error) {
            return promiseError(error);
        }
    }

    async getById(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const car = await this.carRepository.getById(id);
                return car;
            }
            return invalidIdError(id);
        } catch (error) {
            return promiseError(error);
        }
    }

    async create(car) {
        try {
            const response = await this.carRepository.create(car);
            return response;
        } catch (error) {
            return promiseError(error);
        }
    }

    async update(id, car) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const updatedCar = await this.carRepository.update(id, car);
                return updatedCar;
            }
            return invalidIdError(id);
        } catch (error) {
            return promiseError(error);
        }
    }

    async delete(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const deleteCar = await this.carRepository.delete(id);
                return deleteCar;
            }
            return invalidIdError(id);
        } catch (error) {
            return promiseError(error);
        }
    }
}

module.exports = { CarService };