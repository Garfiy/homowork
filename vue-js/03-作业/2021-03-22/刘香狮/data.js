data: {
    // 数据
    list: [{
        id: 1,
        url: '/user',
        text: '用户管理'
    },
    {
        id: 2,
        url: '/jurisdiction',
        text: '权限管理'
    }, {
        id: 3,
        url: '/commodity',
        text: '商品管理'
    }, {
        id: 4,
        url: '/orderForm',
        text: '订单管理'
    },
    {
        id: 5,
        text: '系统设置'
    }],
    
    ietm: {
        uesr: {
            userTd: [
                {
                    id: 1,
                    name: '张三',
                    age: 18,
                    operation: '详情'
                },
                {
                    id: 2,
                    name: '李四',
                    age: 28,
                    operation: '详情'
                },
                {
                    id: 3,
                    name: '王五',
                    age: 20,
                    operation: '详情'
                },
                {
                    id: 4,
                    name: '赵六',
                    age: 17,
                    operation: '详情'
                },
                {
                    id: 5,
                    name: '钱七',
                    age: 26,
                    operation: '详情'
                },
            ],
            userTh: [{
                id: '编号',
                name: '姓名',
                age: '年龄',
                operation: '操作'
            }]
        },
        jurisdiction: {
            jurisdictionTh: [
                {
                    id: '编号',
                    name: '姓名',
                    age: '年龄',
                    operation: '操作'
                }
            ],
            jurisdictionTd:[
            {
                id: 1,
                name: '张三',
                age: 18,
                operation: '删除'
            },
            {
                id: 2,
                name: '李四',
                age: 28,
                operation: '删除'
            },
            {
                id: 3,
                name: '王五',
                age: 20,
                operation: '删除'
            },
            {
                id: 4,
                name: '赵六',
                age: 17,
                operation: '删除'
            },
            {
                id: 5,
                name: '钱七',
                age: 26,
                operation: '删除'
            },
            ]
        },
        commodity:{
            commodityTd:[
            {
                id: 1,
                name: 'Ad钙',
                age: 2 + '元',
                operation: '详情'
            },
            {
                id: 2,
                name: '旺仔',
                age: 5 + '元',
                operation: '详情'
            },
            {
                id: 3,
                name: '王老吉',
                age: 5 + '元',
                operation: '详情'
            },
            {
                id: 4,
                name: '红牛',
                age: 6 + '元',
                operation: '详情'
            },
            {
                id: 5,
                name: '快乐水',
                age: 2.5 + '元',
                operation: '详情'
            },
            ],
            commodityTh:[ {
                    id: '编号',
                    name: '产品',
                    age: '价格',
                    operation: '操作'
                }],
        },
        orderForm:{
            orderFormTd:[
            {
                id: 1,
                name: 'Ad钙',
                age: 2 + '元',
                operation: '下单'
            },
            {
                id: 2,
                name: '旺仔',
                age: 5 + '元',
                operation: '下单'
            },
            {
                id: 3,
                name: '王老吉',
                age: 5 + '元',
                operation: '下单'
            },
            {
                id: 4,
                name: '红牛',
                age: 6 + '元',
                operation: '下单'
            },
            {
                id: 5,
                name: '快乐水',
                age: 2.5 + '元',
                operation: '下单'
            },
            ],
            orderFormTh:[
            {
                    id: '编号',
                    name: '产品',
                    age: '价格',
                    operation: '操作'
                }
            ],
        },
    }

},