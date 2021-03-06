<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 28d269a1dc963caf7fb0753febb703578a6c6e8c
const express = require('express');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const app = express();

app.use('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //设置方法

    next();
});

// 启动静态资源服务
app.use(express.static('public'));

// 处理请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置路由
app.use(router);
// 监听端口
app.listen(3000, () => {
    console.log('running...');
<<<<<<< HEAD
=======
=======
const express = require('express');
const path = require('path');
const router = require('./router.js');
const bodyParser = require('body-parser');
const app = express();

app.use('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); //这个表示任意域名都可以访问，这样写不能携带cookie了。
    //res.header('Access-Control-Allow-Origin', 'http://www.baidu.com'); //这样写，只有www.baidu.com 可以访问。
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS'); //设置方法

    next();
});

// 启动静态资源服务
app.use(express.static('public'));

// 处理请求参数
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 配置路由
app.use(router);
// 监听端口
app.listen(3000, () => {
    console.log('running...');
>>>>>>> 1f81595ab5356690dc75797e456a913ccb85d533
>>>>>>> 28d269a1dc963caf7fb0753febb703578a6c6e8c
});