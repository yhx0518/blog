const { User } = require('../../model/user');
module.exports = async (request, response) => {

    // 标识 表示当前访问的是用户管理页面
    request.app.locals.currentLink = 'user';

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