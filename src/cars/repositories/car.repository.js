class CarRepository {
    constructor(model) {
        this.carModel = model;
    }

    async getAll() {
        const cars = await this.carModel.find();
        return cars;
    }

    async getById(id) {
        const car = await this.carModel.findById(id);
        if (car === null) {
            return {};
        }
        return car;
    }

    async create(car) {
        return this.carModel.create(car);
    }

    async update(id, car) {
        const updatedCar = await this.carModel.findByIdAndUpdate(id, car, {
            new: true,
        });
        if (updatedCar === null) {
            return {};
        }
        return updatedCar;
    }

    async delete(id) {
        const deletedCar = await this.carModel.findByIdAndDelete(id);
        if (deletedCar === null) {
            return {};
        }
        return deletedCar;
    }
}

module.exports = { CarRepository };

