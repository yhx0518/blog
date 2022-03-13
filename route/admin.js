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

admin.post('/user-modify', require('./admin/user-modify'));

// 删除用户路由
admin.get('/delete', require('./admin/user-delete'));

// 商品列表页面路由
admin.get('/article', require('./admin/article'));

// 商品编辑路由
admin.get('/article-edit', require('./admin/article-edit'));

// 实现商品添加路由
admin.post('/article-add', require('./admin/article-add'));

// 实现商品修改的路由
admin.post('/article-modify', require('./admin/article-modify'));

// 商品删除的路由
admin.get('/article-delete', require('./admin/article-delete'));

// 机器列表路由
admin.get('/machine', require('./admin/machine'));

// 机器编辑路由
admin.get('/machine-edit', require('./admin/machine-edit'));

// 增加机器路由
admin.post('/machine-add', require('./admin/machine-add'));

// 修改机器路由
admin.post('/machine-modify', require('./admin/machine-modify'));

// 删除机器路由
admin.get('/machine-delete', require('./admin/machine-delete'));

// 种类列表
admin.get('/kind', require('./admin/kind'));

// 种类编辑路由
admin.get('/kind-edit', require('./admin/kind-edit'));

// 添加种类路由
admin.post('/kind-add', require('./admin/kind-add'));

// 编辑种类路由
admin.post('/kind-modify', require('./admin/kind-modify'));

// 删除种类
admin.get('/kind-delete', require('./admin/kind-delete'));

module.exports = admin;