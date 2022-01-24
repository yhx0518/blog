const { User } = require('../../model/user');
module.exports = async (request, response) => {
    const { message, id } = request.query;
    if (id) {
        let user = await User.findOne({ _id: id });
        let link = '/admin/user-modify?id=' + id;
        let button = '修改'
        response.render('admin/user-edit', {
            message,
            user,
            link,
            button
        });
    } else {
        let link = '/admin/user-edit';
        let button = '添加'
        response.render('admin/user-edit', {
            message,
            link,
            button
        });
    }
}