const { UserDto } = require("./../dtos/car.dto");
const { StatusCode } = require("../../global.utils/status.code");
const { invalidBody } = require("../utils/car.body.validator");
const { invalidBodyError } = require("../../global.utils/error.handler");

export class CarController {
    constructor(carService) {
        this.carService = carService;
    }

    async getAll(req, res) {
        const reponse = await this.carService.getAll();

        if ("promiseError" in reponse) {
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
            return;
        }
        res.status(StatusCode.OK).json(reponse);
    }

    async getById(req, res) {
        const reponse = await this.carService.getById(req.params.id);

        if ("promiseError" in reponse) {
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
            return;
        }

        if ("invalidIdError" in reponse) {
            res.status(StatusCode.BAD_REQUEST).json(reponse);
            return;
        }

        res.status(StatusCode.OK).json(reponse);
    }

    async create(req, res) {
        if (invalidBody(req)) {
            res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
            return;
        }

        const body = req.body;
        const carDto = new CarDto(body);

        const reponse = await this.carService.create(carDto);
        if ("promiseError" in reponse) {
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
            return;
        }

        res.status(StatusCode.CREATED).json(reponse);
    }

    async update(req, res) {
        if (invalidBody(req)) {
            res.status(StatusCode.BAD_REQUEST).json(invalidBodyError(req.body));
            return;
        }

        const body = req.body;
        const id = req.params.id;
        const carDto = new CarDto(body);

        const reponse = await this.carService.update(id, carDto);

        if ("promiseError" in reponse) {
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
            return;
        }

        if ("invalidIdError" in reponse) {
            res.status(StatusCode.BAD_REQUEST).json(reponse);
            return;
        }

        res.status(StatusCode.OK).json(reponse);
    }

    async delete(req, res) {
        const reponse = await this.carService.delete(req.params.id);

        if ("promiseError" in reponse) {
            res.status(StatusCode.INTERNAL_SERVER_ERROR).json(reponse);
        }

        if ("invalidIdError" in reponse) {
            res.status(StatusCode.BAD_REQUEST).json(reponse);
        }

        res.status(StatusCode.OK).json(reponse);
    }
}
