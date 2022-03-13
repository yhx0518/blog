const { Kinds } = require('../../model/kind');

module.exports = async (request, response) => {

    const { message, id } = request.query;
    if (id) {
        const kinds = await Kinds.findOne({ _id: id });
        let link = '/admin/kind-modify?id=' + id;
        let button = '修改'
        response.render('admin/kind-edit', { message, kinds, link, button });
    } else {
        let link = '/admin/kind-add';
        let button = '添加'
        return response.render('admin/kind-edit', {
            message,
            link,
            button
        });
    }

}