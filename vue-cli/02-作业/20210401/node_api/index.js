const express = require('express')
const app = express()
const bodyParser = require('body-parser')
    // 处理静态资源
app.use(express.static('public'))
    // 处理参数
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 设置允许跨域访问该服务
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    // res.header('Access-Control-Allow-Headers', 'mytoken');
    next();
});
// 账户信息
const userData = [{
        id: 0,
        account: "admin",
        password: 'admin',
        userName: '管理员',
    }, {
        id: 1,
        account: "张三",
        password: 'admin',
        userName: '张三',
    },
    {
        id: 2,
        account: "李四",
        password: 'admin',
        userName: '李四',
    },
    {
        id: 3,
        account: "王五",
        password: 'admin',
        userName: '王五',
    },
    {
        id: 4,
        account: "赵六",
        password: 'admin',
        userName: '赵六',
    }
];
// 成绩信息
const studyData = [{
        "id": 1,
        "name": "张三",
        "result": 40
    },
    {
        "id": 2,
        "name": "李四",
        "result": 50
    },
    {
        "id": 3,
        "name": "王五",
        "result": 60
    },
    {
        "id": 4,
        "name": "赵六",
        "result": 70
    }
];
app.post('/login', (req, res) => {
    // 账户
    let account = req.body.account;
    // 密码
    let password = req.body.password;
    // 查看数据库中是否有这个账户 
    // 并保存查询到的信息

    // filter 按照指定的规则查询数据内容
    // 如果没有符合规则的数据 就返回 [] 空的数组
    // 如果有符合条件的  就将所有符合条件的数据 合成一个数组返回

    // find 按照指定的规则查询数据内容
    // 如果没有符合规则的数据 就返回 undefined
    // 如果有符合条件的 就返回那条数据（只会返回第一条）
    let user = userData.find((value, index, array) => value.account === account);
    // console.log(user);
    if (user) {
        if (user.password === password) {
            // 账户密码都正确
            // 执行这里
            let arr = [];

            // 先判断当前登录用户是否是管理员
            if (user.id === 0) {
                arr = studyData;
            } else {
                arr = studyData.filter((value, index, array) => value.id === user.id);
            }

            res.send({
                state: 200,
                msg: '登录成功',
                data: {
                    // 学生成绩信息
                    studyList: arr,
                    // 用户账户信息
                    userInfo: user,
                },
            })
        } else {
            // 如果密码不正确
            res.send({
                state: 202,
                msg: '密码错误',
                data: [],
            })
        }
    } else {
        // 如果不存在
        // 表示账户不存在
        res.send({
            state: 201,
            msg: '账户不存在',
            data: [],
        })
    }



    // var result = userData.some(val => val.uname == req.body.username && val.password == req.body.password)
    // if (result) {
    //     // res.status = 200
    //     // res.send('ok')
    //     res.send({ data: 'ok', status: 200, token: 'china' })
    // } else {
    //     // res.status = 400
    //     // res.send('no')
    //     res.send({ data: 'no', status: 400 })
    // }
    //res.send('POST请求传递参数!' + req.body.username + '---' + req.body.password)
})


app.get('/async1', (req, res) => {
    res.send('hello1')
})
app.get('/async2', (req, res) => {
    if (req.query.info == 'hello') {
        res.send('world')
    } else {
        res.send('error')
    }
})


app.get('/axios-json', (req, res) => {
    res.json({
        uname: 'lisi',
        age: 12
    });
})


app.get('/fdata', (req, res) => {
    res.send('Hello Fetch!')
})


// 启动监听
app.listen(3000, () => {
    console.log('running...')
})