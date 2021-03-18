let data = require('./data.json');
const path = require('path');
const fs = require('fs');

// 自动生成图书编号（自增）
let maxBookCode = () => {
    let arr = [];
    data.forEach((item) => {
        arr.push(item.id);
    });
    return Math.max.apply(null, arr);
};

// 把内存数据写入文件
let writeDataToFile = (res) => {
    fs.writeFile(path.join(__dirname, 'data.json'), JSON.stringify(data, null, 4), (err) => {
        if (err) {
            res.json({
                status: 500
            });
        }
        res.json({
            status: 200
        });
    });
};

// 改变全选状态
exports.allchecked = (req, res) => {
    let flag = req.params.val;
    data.forEach(item => {
        item.completed = Boolean(Number(flag));
    });
    // 把内存中的数据写入文件
    writeDataToFile(res);
};

// 改变当选状态
exports.onechecked = (req, res) => {
    let id = req.params.id;
    let val = req.body.val;
    data.forEach(item => {
            if (item.id == id) {
                item.completed = val;
            }
        })
        // 把内存中的数据写入文件
    writeDataToFile(res);
}

// 获取图书列表数据
exports.getAllBooks = (req, res) => {
    res.json(data);
};

// 添加图书保存数据
exports.addBook = (req, res) => {
    // 获取表单数据
    let info = req.body;
    let book = {};
    for (let key in info) {
        book[key] = info[key];
    }
    book.completed = false;
    book.id = +new Date();
    data.push(book);
    // 把内存中的数据写入文件
    writeDataToFile(res);
};
// 跳转编辑图书页面
exports.toEditBook = (req, res) => {
    let id = req.params.id;
    let book = {};
    data.some((item) => {
        if (id == item.id) {

            book = item;
            return true;
        }
    });
    res.json(book);
};
// 修改内容
exports.editBook = (req, res) => {
    let info = req.body;
    info.id = req.params.id;

    data.some((item) => {
        if (info.id == item.id) {
            for (let key in info) {
                item[key] = info[key];
            }
            return true;
        }
    });
    // 把内存中的数据写入文件
    writeDataToFile(res);
};
// 删除图书信息
exports.deleteBook = (req, res) => {
    let id = req.params.id;
    console.log(id, '---------------');
    data.some((item, index) => {
        if (id == item.id) {
            // 删除数组的一项数据
            data.splice(index, 1);
            return true;
        }
    });
    // 把内存中的数据写入文件
    writeDataToFile(res);
};
// 删除图书信息
exports.deleteAllComplete = (req, res) => {
    data = data.filter(item => !item.completed);
    // 把内存中的数据写入文件
    writeDataToFile(res);
};