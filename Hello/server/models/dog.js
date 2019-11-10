const mongoose = require('mongoose');

const DogSchema = new mongoose.Schema({
    name:{type: String, required: true, minlength: 3},
    breed:{type:String, required: true, minlength:3},
    age:{type: Number, required: true}
}, {timestamps:true})

const Dog = mongoose.model('Dog',DogSchema)

module.exports = Dog