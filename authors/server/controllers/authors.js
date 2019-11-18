const Author = require('../models/author')

module.exports = {
    showAll: (req,res) => {
        Author.find({})
            .then((authors) => res.json({message:"All Authors", authors: authors}))
            .catch(err => res.json(err))
    },
    show: (req,res) => {
        Author.findOne({_id: req.params.id})
            .then((author) => res.json({message: "Found Author", author: author}))
            .catch(err => res.json(err))
    },
    create: (req,res) => {
        Author.create(req.body)
            .then((author)=>res.json({message: "Created Author", author: author}))
            .catch((err) => res.json(err))
    },
    update: (req,res) => {
        Author.findOneAndUpdate({_id:req.params.id},req.body)
            .then(author => res.json({message:"Author Updated",author: author}))
            .catch(err => json(err))
    },
    destroy: (req,res) => {
        Author.remove({_id:req.params.id})
            .then(()=> res.json({message: "Author Destroyed"}))
            .catch(err => json(err))
    }
}
