const mongoose = require('mongoose');

const guidline = {
    user: {
        name: String,
        phone: String,
        address: String,
        job: String,
        email: String,
        age: Number,
        gender: String
    },
    car: {
        model: String,
        brand: String,
        price: String,
        currency: String,
        color: String,
        country: String
    }
}

module.exports = (type) => {
    const schema = new mongoose.Schema(guidline[type]);
    return mongoose.model(type,schema);
}