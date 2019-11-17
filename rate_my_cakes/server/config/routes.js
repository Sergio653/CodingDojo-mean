var cakes = require('../controller/cakes')

module.exports = (app) => {
    app.get('/cakes',cakes.index),
    app.get('/cakes/:id',cakes.show),
    app.post('/cakes',cakes.create),
    app.put('/cakes/:id',cakes.update),
    app.delete('/cakes/:id',cakes.destroy)

}