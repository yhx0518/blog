const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const session = require('express-session')

const app = express();
// 数据库连接
require('./model/connect');
// 设置中间件
app.use(bodyParser.urlencoded({ extended: false }));
// 配置session
app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: 'secret key'
}));

// 模板存放的位置
app.set('views', path.join(__dirname, 'views'));
// 模板的默认后缀
app.set('view engine', 'art');
// 当渲染后缀为art的模板时使用的后缀是什么
app.engine('art', require('express-art-template'));

// 网站静态资源服务
app.use(express.static(path.join(__dirname, 'public')));

const home = require('./route/home');
const admin = require('./route/admin');

// 拦截请求 判断用户登录状态
app.use('/admin', require('./middleware/loginGuard'));

app.use('/home', home);
app.use('/admin', admin);

// 错误处理
app.use((err, request, response, next) => {
    const result = JSON.parse(err);
    let params = [];
    for (let attr in result) {
        if (attr != 'path') {
            params.push(attr + '=' + result[attr]);
        }
    }
    response.redirect(`${result.path}?${params.join('&')}`);
});

app.listen(80, () => {
    console.log('网站服务器启动成功，请访问localhost');
});