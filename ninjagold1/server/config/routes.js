

    users = require('../controllers/users.js')


module.exports = function(app){
    // app.get('/', function (req, res) {
       
    //     res.render('index.html')
       
    // })
       // all other routes


    app.get('/bob', (req,res)=>{
        users.create(req,res)
        res.redirect('/')
    })
    app.get('/bobs', (req,res)=>{
        users.find({name: 'bob'})
        .then(data =>{
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(data));

        })
        .catch(err => {
            console.log('err:',err)
        })
    })
}   