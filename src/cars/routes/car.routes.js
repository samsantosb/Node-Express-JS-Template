const express = require('express');
const { car } = require('../factories/car.factory');

const carRoutes = express.Router();

carRoutes.get("/", car.getAll.bind(car));
carRoutes.get("/:id", car.getById.bind(car));
carRoutes.post("/", car.create.bind(car));
carRoutes.put("/:id", car.update.bind(car));
carRoutes.delete("/:id", car.delete.bind(car));

module.exports = { carRoutes };
