const { CarService } = require("./../services/car.service");
const { CarRepository } = require("./../repositories/car.repository");
const { CarModel } = require("../models/car.model");
const { CarController } = require("../controllers/car.controller");

function carFactory() {
    const carRepository = new CarRepository(CarModel);
    const carService = new CarService(carRepository);
    const carController = new CarController(carService);
    return carController;
}

const car = carFactory();

module.exports = { car };