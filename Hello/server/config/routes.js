var dogs = require('../controllers/dogs.js')

module.exports = (app) => {
    app.get('/', (req, res) => {
        dogs.index(req,res)
    });
    app.get('/dogs/new',(req,res)=>{
        dogs.new(req,res)
    });

    app.post('/dogs',(req,res)=> {
        dogs.create(req,res)
    });

    app.get('/dogs/:id',(req,res) => {
        dogs.show(req,res)
    });
    app.get('/dogs/edit/:id',(req,res)=> {
        dogs.edit(req,res)
    });
    app.post('/dogs/:id',(req,res) => {
        dogs.update(req,res)
    });
    app.post('/dogs/destroy/:id',(req,res) => {
        dogs.destroy(req,res)
    })
}