
const Dog = require('../models/dog.js')

module.exports = {
    index: (req,res) =>{
        Dog.find()    
        .then(data => res.render('index',{dogs:data}))
        .catch(err => res.json(err))
    },
    new: (req,res) => {
        res.render('new')
    },
    create: (req,res) => {
        const dogData = req.body;
        Dog.create(dogData)
            .then(newDog => {
                console.log(newDog);
                res.redirect('/')
            })
            .catch(err => res.json(err))
    },
    show: (req,res) => {
        Dog.findOne({_id: req.params.id})
        .then(dog => {
            res.render('show',{ dog : dog})
        })
        .catch(err => res.json(err))
    },
    edit: (req,res) => {
        Dog.findOne({_id: req.params.id})
        .then(dog => {
            res.render('edit',{ dog : dog})
        })
        .catch(err => res.json(err))
    },
    update: (req,res) => {
        const dogData = req.body
        Dog.update({_id: req.params.id},dogData)
            .then(result => {
                console.log(req.params.id)
                res.redirect('/dogs/'+String(req.params.id)+'')})
            .catch(err => res.json(err))
    },
    destroy: (req,res) => {
        Dog.remove({_id: req.params.id})
        .then(deletedDog => {
            res.redirect('/')
        })
        .catch(err => res.json(err))
    }
}