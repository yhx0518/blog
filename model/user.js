// 创建用户集合
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Joi = require('joi');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    email: {
        type: String,
        // 保证邮箱地址不重复
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // admin 超级管理员
    // normal 普通用户
    role: {
        type: String,
        required: true,
        default: 'normal'
    },
    // 0: 启用状态
    // 1: 禁用状态
    state: {
        type: Number,
        default: 0
    }
});

// 创建集合
const User = mongoose.model('User', userSchema);

/* async function createUser() {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456', salt);
    User.create({
        username: 'admin',
        email: 'admin@163.com',
        password: pass,
        role: 'normal',
        state: 0
    }, (err, data) => {
        if (err) throw err;
        console.log(data);
    });
}

createUser(); */

// 验证用户信息
const validateUser = user => {
    // 定义对象的验证规则
    const schema = Joi.object({
        username: Joi.string().min(2).max(12).required().error(new Error('用户名应为2~12位')),
        email: Joi.string().email().required().error(new Error('邮箱地址不正确')),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码未通过验证')),
        // role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
        state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
    });
    // 实施验证
    return schema.validateAsync(user);
}


module.exports = {
    User,
    validateUser
}