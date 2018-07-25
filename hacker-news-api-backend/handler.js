var storage = require('./storage');
module.exports = {
    listHandler: function (req, res) {
        storage.getAllNews(function (newsList) {
            res.send({
                errCode: 200,
                msg: "获取数据成功",
                data: newsList
            });
        })
    },
    detailHandler: function (req, res) {
        storage.getNewsById(req.query.id, function (news) {
            res.send({
                errCode: 200,
                msg: "获取数据成功", 
                data: news
            });
        })
    },
    addHandler: function (req, res) {
        storage.addNews(req.body, function () { 
            res.send({
                errCode: 200,
                msg: "添加数据成功"
            })
        })
    }
}