const { fakeCars, updatedCar } = require("./fake.car.data");

const fakeCarModel = {
    find: () => Promise.resolve(fakeCars),
    findById: () => Promise.resolve(fakeCars[0]),
    create: () => Promise.resolve(fakeCars[0]),
    findByIdAndUpdate: () => Promise.resolve(updatedCar),
    findByIdAndDelete: () => Promise.resolve(fakeCars[0]),
}

module.exports = { fakeCarModel }