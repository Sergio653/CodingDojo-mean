const Cake = require('../models/cake')

module.exports = {
    index: (req,res) => {
        Cake.find({})
            .then((cakes) => res.json({message:"All cakes", data: cakes}))
            .catch(err => res.json(err))
    },
    show: (req,res) => {
        Cake.find({_id: req.params.id})
            .then((cake) => res.json({message: "Found cake", data: cake}))
            .catch(err => res.json(err))
    },
    create: (req,res) => {
        console.log(req.body)
        Cake.create(req.body)
            .then((cake)=>res.json({message: "Created cake", data: cake}))
            .catch((err) => res.json(err))
    },
    update: (req,res) => {
        console.log(req.body.rating)
        console.log(req.body)
        Cake.findOneAndUpdate({_id:req.params.id},{$push: {review: req.body.
            review, rating: req.body.rating}})
            .then(cake => res.json({message:"cake Updated", data:cake}))
            .catch(err => json(err))
    },
    destroy: (req,res) => {
        Cake.remove({_id:req.params.id})
            .then(()=> res.json({message: "cake Destroyed"}))
            .catch(err => json(err))
    }   
}