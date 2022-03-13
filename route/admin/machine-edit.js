const { Machine } = require('../../model/machine');

module.exports = async (request, response) => {

    // 标识
    request.app.locals.currentLink = 'machine';

    const { message, id } = request.query;

    if (id) {
        const machines = await Machine.findOne({ _id: id });
        let link = '/admin/machine-modify?id=' + id;
        let button = '修改';
        return response.render('admin/machine-edit', { message, link, button, machines });
    } else {
        let link = '/admin/machine-add';
        let button = '新增';
        return response.render('admin/machine-edit', { message, link, button });
    }
}