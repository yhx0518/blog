const mongoose = require('mongoose');

const sellSchema = new mongoose.Schema({
    title: {
        type: String
    },
    price: {
        type: String
    },
    Selltime: {
        type: Date
    },
    machineNumber: {
        type: String
    },
    tower: {
        type: String
    }
});

const Sell = mongoose.model('Sell', sellSchema);

module.exports = {
    Sell
}