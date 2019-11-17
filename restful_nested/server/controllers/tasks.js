const Task = require('../models/task')

module.exports = {
    index: (req,res) => {
        Task.find({})
            .then((tasks) => res.json({message:"All Tasks", data: tasks}))
            .catch(err => res.json(err))
    },
    show: (req,res) => {
        Task.find({_id: req.params.id})
            .then((task) => res.json({message: "Found Task", data: task}))
            .catch(err => res.json(err))
    },
    create: (req,res) => {
        Task.create(req.body)
            .then((task)=>res.json({message: "Created Task", data: task}))
            .catch((err) => res.json(err))
    },
    update: (req,res) => {
        Task.findOneAndUpdate({_id:req.params.id},req.body)
            .then(task => res.json({message:"Task Updated",data:task}))
            .catch(err => json(err))
    },
    destroy: (req,res) => {
        Task.remove({_id:req.params.id})
            .then(()=> res.json({message: "Task Destroyed"}))
            .catch(err => json(err))
    }
}