const { mockResponse, mockRequest } = require("../__mocks__/fake.car.routes");
const { fakeCarService } = require("../__mocks__/fake.car.service");
const { CarController } = require("./car.controller");
const { fakeId, fakeCars } = require("../__mocks__/fake.car.data");
const { StatusCode } = require("../../utils/status.code");

const carController = new CarController(fakeCarService);
const req = mockRequest();
const res = mockResponse();

describe("car Controller", () => {
    describe("getAll", () => {
        it("should return all cars", async () => {
            await carController.getAll(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeCars);
        });
        it("should return status code 200", async () => {
            await carController.getAll(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it("should call carService getAll", async () => {
            const spy = jest.spyOn(fakeCarService, "getAll");
            await carController.getAll(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("getById", () => {
        it("should return car by id", async () => {
            req.params.id = fakeId;
            await carController.getById(req, res);
            expect(res.json).toHaveBeenCalledWith(fakeCars[0]);
        });
        it("should return status code 200", async () => {
            req.params.id = fakeId;
            await carController.getById(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it("should call carService getById", async () => {
            const spy = jest.spyOn(fakeCarService, "getById");
            req.params.id = fakeId;
            await carController.getById(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("create", () => {
        it("should create car", async () => {
            req.body = fakeCars[0];
            await carController.create(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
            expect(res.json).toHaveBeenCalledWith(fakeCars[0]);
        });
        it("should return status code 201", async () => {
            req.body = fakeCars[0];
            await carController.create(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.CREATED);
        });
        it("should call carService create", async () => {
            const spy = jest.spyOn(fakeCarService, "create");
            req.body = fakeCars[0];
            await carController.create(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("update", () => {
        it("should update car", async () => {
            req.body = fakeCars[0];
            await carController.update(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
            expect(res.json).toHaveBeenCalledWith(fakeCars[0]);
        });
        it("should return status code 200", async () => {
            req.body = fakeCars[0];
            await carController.update(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it("should call carService update", async () => {
            const spy = jest.spyOn(fakeCarService, "update");
            req.body = fakeCars[0];
            await carController.update(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });

    describe("delete", () => {
        it("should delete car", async () => {
            req.params.id = fakeId;
            await carController.delete(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
            expect(res.json).toHaveBeenCalledWith(fakeCars[0]);
        });
        it("should return status code 200", async () => {
            req.params.id = fakeId;
            await carController.delete(req, res);
            expect(res.status).toHaveBeenCalledWith(StatusCode.OK);
        });
        it("should call carService delete", async () => {
            const spy = jest.spyOn(fakeCarService, "delete");
            req.params.id = fakeId;
            await carController.delete(req, res);
            expect(spy).toHaveBeenCalled();
        });
    });
});