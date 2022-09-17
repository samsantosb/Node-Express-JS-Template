import { promiseError, invalidIdError } from "../../global.utils/error.handler";
const { Types } = require("mongoose");

export class UserService {
    constructor(carRepository) {
        this.carRepository = carRepository;
    }

    async getAll() {
        try {
            const users = await this.carRepository.getAll();

            return users;
        } catch (error) {
            return promiseError(error);
        }
    }

    async getById(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const user = await this.carRepository.getById(id);
                return user;
            }
            return invalidIdError(id);
        } catch (error) {
            return promiseError(error);
        }
    }

    async create(user) {
        try {
            const response = await this.carRepository.create(user);
            return response;
        } catch (error) {
            return promiseError(error);
        }
    }

    async update(id, user) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const updatedUser = await this.carRepository.update(id, user);
                return updatedUser;
            }
            return invalidIdError(id);
        } catch (error) {
            return promiseError(error);
        }
    }

    async delete(id) {
        try {
            if (Types.ObjectId.isValid(id)) {
                const deletedUser = await this.carRepository.delete(id);
                return deletedUser;
            }
            return invalidIdError(id);
        } catch (error) {
            return promiseError(error);
        }
    }
}
