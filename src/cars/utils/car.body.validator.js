function invalidBody(req) {
    const car = {
        model: req.body.model,
        year: req.body.year,
        price: req.body.price,
        color: req.body.color,
    };

    const jsonCar = JSON.stringify(car);
    const jsonBody = JSON.stringify(req.body);

    if (jsonCar !== jsonBody) {
        return true;
    }
    return false;
}

module.exports = { invalidBody };
