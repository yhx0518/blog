const mongoose = require('mongoose');
const Joi = require('joi');

const machineSchema = new mongoose.Schema({
    number: {
        type: String,
        required: [true, '请传入机器号']
    },
    publishDate: {
        type: Date,
        default: Date.now()
    },
    tower: {
        type: String,
        required: [true, '请传入楼号']
    },
    state: {
        type: String
    }
});

const Machine = mongoose.model('Machines', machineSchema);

const validateMachine = machine => {
    const schema = Joi.object({
        number: Joi.string().min(1).max(1).required().error(new Error('机器号请传入3位数字')),
        tower: Joi.string().required().error(new Error('所属楼不能为空'))
    });
    return schema.validateAsync(machine);
}

module.exports = {
    Machine,
    validateMachine
}