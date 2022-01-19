const express = require('express');

// 创建博客展示页面路由
const home = express.Router();

home.get('/', (request, response) => {
    response.send('ok');
});

// 将路由对象作为模块成员进行导出
module.exports = home;