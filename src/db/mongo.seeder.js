const { CarModel } = require("../cars/models/car.model");
const { mongoConnect, mongoDisconnect } = require('./mongo.connection');

async function seed() {
    const cars = [
        {
            model: "Audi",
            year: 2019,
            price: 10000,
            color: "red",

        },
        {
            model: "BMW",
            year: 2018,
            price: 20000,
            color: "blue",
        },
        {
            model: "Mercedes",
            year: 2017,
            price: 30000,
            color: "green",
        },
    ];

    mongoConnect();

    for (const car of cars) {
        const newCar = new CarModel(car);
        try {
            await newCar.save();
        } catch (error) {
            console.log(`failed to seed car ${car.name}`);
            console.log(error);
        }
    }

    console.log("DB successfully seeded");

    mongoDisconnect();
}
seed();