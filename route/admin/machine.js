const { Machine } = require('../../model/machine');

module.exports = async (request, response) => {

    // 标识
    request.app.locals.currentLink = 'machine';

    const machine = await Machine.find({});
    // response.send(machine);

    response.render('admin/machine', { machine });
}