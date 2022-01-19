const express = require('express');
const admin = express.Router();

// 登录路由
admin.get('/login', require('./admin/loginPage'));

// 登录路由
admin.post('/login', require('./admin/login'));

// 用户列表路由
admin.get('/users', require('./admin/userPage'));

// 退出路由
admin.get('/logout', require('./admin/logout'));

// 编辑用户路由
admin.get('/user-edit', require('./admin/user-edit'));

// 用户添加路由
admin.post('/user-edit', require('./admin/user-edit-fn'));

module.exports = admin;