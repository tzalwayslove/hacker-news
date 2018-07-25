var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var connStr = 'mongodb://localhost:27017';


function connectDB(callback) {
    MongoClient.connect(connStr, function (err, client) {
        var db = client.db('hackernews');
        var news = db.collection('news');
        callback(news)
        client.close();
    })
}

module.exports = {
    getAllNews: function (callback) { 
        connectDB(function (news) { 
            news.find({}).toArray(function (err, data) {
                callback(data);
            })
        })
    },
    getNewsById: function (id, callback) {
        connectDB(function(news){
            news.find({_id: ObjectId(id)}).toArray(function (err, data) { 
                callback(data[0]);
            })
        })
    },
    addNews: function (newNews, callback) {
        connectDB(function (news) {
            news.insertOne(newNews, function (err, data) {
                if (data.result.ok == 1) {
                    callback();
                }
            })
        })
    }
}