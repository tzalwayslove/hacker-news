var router = require('express').Router();

var handler = require('./handler');

// 1. 新闻列表数据接口
router.get('/api/getnewslist', handler.listHandler)
// 2. 新闻详情接口
router.get('/api/getnewsdetail', handler.detailHandler)
// 3. 添加新闻数据的接口
router.post('/api/addnews', handler.addHandler);

module.exports = router;