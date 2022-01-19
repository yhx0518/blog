const bcrypt = require('bcrypt');
const { User, validateUser } = require('../../model/user');

module.exports = async (request, response, next) => {
    try {
        await validateUser(request.body);
    } catch (error) {
        // return response.redirect(`/admin/user-edit?message=${error.message}`);
        return next(JSON.stringify({ path: '/admin/user-edit', message: error.message }));
    }
    // 根据邮箱地址查询用户是否存在
    let user = await User.findOne({ email: request.body.email });
    if (user) {
        // return response.redirect(`/admin/user-edit?message=邮箱地址已经被占用了`);
        return next(JSON.stringify({ path: '/admin/user-edit', message: '邮箱地址已经被占用了' }));
    }
    // 对密码进行加密
    // 生成随机字符串
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(request.body.password, salt);
    request.body.password = password;
    await User.create(request.body);
    response.redirect('/admin/users');
}