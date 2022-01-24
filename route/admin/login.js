// 引入用户集合构造函数
const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (request, response) => {
    // 接受请求参数
    const { email, password } = request.body;

    // if(email.trim().length === 0 || password.trim().length === 0) return response.status(400).send('<h4>邮件地址或者密码错误</h4>');
    if (email.trim().length === 0 || password.trim().length === 0) return response.status(400).render('admin/error', { msg: '邮件地址或者密码错误' });
    // 根据邮箱地址查询用户信息 如果查询到用户 user变量是对象类型 如果没有查到用户 user变量为空
    let user = await User.findOne({ email });
    if (user) {
        // bcrypt.compare 返回布尔值 true成功 false失败
        let isValid = await bcrypt.compare(password, user.password)
        if (isValid) {
            // 将用户名存储在请求对象中
            request.session.username = user.username;
            request.app.locals.userInfo = user;
            // console.log(request);
            // 重定向到用户列表页面
            response.redirect('/admin/users');
        } else {
            response.status(400).render('admin/error', { msg: '邮件地址或者密码错误' });
        }
    } else {
        // 没查询到用户
        response.status(400).render('admin/error', { msg: '邮件地址或者密码错误' });
    }
}