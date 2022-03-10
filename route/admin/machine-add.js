const { Machine, validateMachine } = require('../../model/machine')

module.exports = async (request, response, next) => {
    const { number, publishDate, tower, state } = request.body;
    const validateObj = { number, tower };

    try {
        await validateMachine(validateObj);
    } catch (e) {
        return next(JSON.stringify({ path: '/admin/machine-edit', message: e.message }));
    }
    const machine = await Machine.findOne({ number });
    if (machine) {
        return next(JSON.stringify({ path: '/admin/machine-edit', message: '机器已存在' }));
    }

    await Machine.create({
        number, publishDate, tower, state
    });
    response.redirect('/admin/machine');
}