var url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/mongo_books_oslo_1';
var MongoClient = require('mongodb').MongoClient;
var collection = MongoClient.connect(url).then(function (db) { return db.collection('books'); });

module.exports = function () {
    return {
        findAll: function () {
            return collection.then(function (books) {
                return books.find({}).toArray();
            });
        },
        stockUp: function (isbn, count) {
            return collection.then(function (books) {
                return books.updateOne({isbn: Number(isbn)}, {
                    isbn: isbn,
                    count: count
                }, {upsert: true});
            });
        },
        getCount: function (isbn) {
            return collection.then(function (books) {
                return books.find({"isbn": Number(isbn)}).limit(1).next();
            }).then(function (result) {
                if (result) {
                    return result.count;
                }
                return null;
            });
        }
    };
};