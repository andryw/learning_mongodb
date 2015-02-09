var mongoose = require('mongoose');

//Export module relate to the bookSoteDB
module.exports = {
    url: 'mongodb://localhost/bookStoreDb',
    //Data Schema
    bookStoreSchema: function(){
        return new mongoose.Schema({
            author: String,
            name: String,
            publisher: String,
            year: Number

        })
    },

    //Class Model
    bookStoreModelClass: function(){
        return mongoose.model('BookStoreInfo', this.bookStoreSchema());

    }
}


