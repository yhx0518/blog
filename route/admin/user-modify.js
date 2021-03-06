const { User } = require('../../model/user');
const bcrypt = require('bcrypt');

module.exports = async (request, response, next) => {
    const { username, email, role, state, password } = request.body;
    const id = request.query.id;
    let user = await User.findOne({ _id: id });
    let isValid = await bcrypt.compare(password, user.password) || 123456;
    if (isValid) {
        // response.send('成功');
        await User.updateOne({ _id: id }, {
            username,
            email,
            role,
            state
        });

        response.redirect('/admin/users');
    } else {
        let obj = {
            path: '/admin/user-edit',
            message: '密码错误，不能进行用户信息修改',
            id
        }
        next(JSON.stringify(obj));
    }
}