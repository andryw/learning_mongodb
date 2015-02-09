/*
To run type nodejs queryDb.js (on linux)
*/

var mongoose = require('mongoose');

//load the bookStoreModel
var bookStoreDb = require('./bookStoreDb');

//Create connection
var db = mongoose.connection;
mongoose.connect(bookStoreDb.url);

//Open the connection to the DB
db.on('error', console.error);
db.once('open', function() {
});

//Load the Class Model
var BookStoreDbModel = bookStoreDb.bookStoreModelClass();


//Query to return one object saved on the DB
BookStoreDbModel
    .findOne()
    .exec(function(err, data) {
        if (err) return console.error(err);
        console.log(data);
    });

