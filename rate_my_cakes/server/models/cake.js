var mongoose = require('mongoose')

var CakeSchema = new mongoose.Schema({
    baker:{
        type: String,
        minlength: 2,
        required: true
    },
    review: [{type:String, minlength: 2}],
    rating:[{type: Number}],
    img:{
        type: String,
        required: true
    },
})

var Cake = mongoose.model('Cake',CakeSchema)
module.exports = Cake