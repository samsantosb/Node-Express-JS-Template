const { Schema, model } = require('mongoose');

//car schema
const CarSchema = new Schema({
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
});

const CarModel = model('Car', CarSchema);

module.exports = { CarModel }
