const express = require('express');

// 创建博客展示页面路由
const home = express.Router();

home.get('/', require('./home/index'));

// 商品详情页面
home.get('/articles', require('./home/article'));

// 购物车页面
home.get('/cart', require('./home/cart'));

// 选择支付方式页面
home.get('/payment', require('./home/payment'));

// 微信支付页面
home.get('/pay-wechat', require('./home/pay-wechat'));

// 支付宝支付
home.get('/pay-ali', require('./home/pay-ali'));

// 将路由对象作为模块成员进行导出
module.exports = home;