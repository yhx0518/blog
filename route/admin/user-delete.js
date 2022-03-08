const { User } = require('../../model/user')
module.exports = async (request, response) => {
    // 获取要删除的用户id
    const { id } = request.query;
    // 根据id删除用户
    await User.findOneAndDelete({ _id: id });
    response.redirect('/admin/users');
}