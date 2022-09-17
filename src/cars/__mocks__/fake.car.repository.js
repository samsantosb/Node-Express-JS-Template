const { fakeCars, updatedCar } = require("./fake.car.data");

const fakeCarRepository = {
    getAll: () => Promise.resolve(fakeCars),
    getById: () => Promise.resolve(fakeCars[0]),
    create: () => Promise.resolve(fakeCars[0]),
    update: () => Promise.resolve(updatedCar),
    delete: () => Promise.resolve(fakeCars[0]),
}

module.exports = { fakeCarRepository }