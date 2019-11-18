var mongoose = require('mongoose')

var AuthorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        required: "You must put a name!!!"
    }
},{ timestamps: true })

var Author = mongoose.model('Author',AuthorSchema)
module.exports = Author