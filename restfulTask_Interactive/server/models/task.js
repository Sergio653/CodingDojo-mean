var mongoose = require('mongoose')

var taskSchema = new mongoose.Schema({
    title: {
        type: String,
        minilength: 2,
        required: true
    },
    desc: {
        type: String,
        default: '',
    },
    completed: {
        type: Boolean,
        default: false
    }
},{timestamps:true});

var Task = mongoose.model('Task',taskSchema)
module.exports = Task