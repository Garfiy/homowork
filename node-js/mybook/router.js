<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 28d269a1dc963caf7fb0753febb703578a6c6e8c
/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 查询图书列表
router.get('/books',service.getAllBooks);
// 添加图书(提交表单)
router.post('/books',service.addBook);
// 跳转到编辑图书信息页面
router.get('/books/:id',service.toEditBook);
// router.get('/toEditBook',service.toEditBook);
// 编辑图书提交表单
router.put('/books/:id',service.editBook);
// 删除图书信息
router.delete('/books/:id',service.deleteBook);
// 验证图书名称是否存在
router.get('/books/book/:name',service.checkName);

<<<<<<< HEAD
=======
=======
/*
  路由模块
*/
const express = require('express');
const router = express.Router();
const service = require('./service.js');

// 查询图书列表
router.get('/books',service.getAllBooks);
// 添加图书(提交表单)
router.post('/books',service.addBook);
// 跳转到编辑图书信息页面
router.get('/books/:id',service.toEditBook);
// router.get('/toEditBook',service.toEditBook);
// 编辑图书提交表单
router.put('/books/:id',service.editBook);
// 删除图书信息
router.delete('/books/:id',service.deleteBook);
// 验证图书名称是否存在
router.get('/books/book/:name',service.checkName);

>>>>>>> 1f81595ab5356690dc75797e456a913ccb85d533
>>>>>>> 28d269a1dc963caf7fb0753febb703578a6c6e8c
module.exports = router;