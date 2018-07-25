var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// 我们要给前端提供数据接口

// 进行跨域响应头的设置
app.use(function (req, res, next) {
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With,accept, origin, content-type');
    next();
})

var router = require('./router');
app.use(router);



app.listen(9999, function () { 
    console.log('http://localhost:9999')
})