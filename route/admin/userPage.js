const { User } = require('../../model/user')
module.exports = async (request, response) => {

    // 标识 表示当前访问的是用户管理页面
    request.app.locals.currentLink = 'user';

    // 当前页参数
    let page = request.query.page || 1;
    let pageSize = 5;
    // 查询总数
    let count = await User.countDocuments({});
    let total = Math.ceil(count / pageSize);
    // 查询用户信息
    let start = (page - 1) * pageSize
    let users = await User.find({}).limit(pageSize).skip(start);
    response.render('admin/user', {
        users,
        page,
        total,
        count
    });
}