const { User } = require('../../model/user')
module.exports = async (request, response) => {
    // 查询用户信息
    let users = await User.find({});
    response.render('admin/user', { users });
}