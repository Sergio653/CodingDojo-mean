var tasks = require('../controllers/tasks')

module.exports = (app) => {
    app.get('/', tasks.index),
    app.get('/tasks/:id', tasks.show),
    app.post('/tasks', tasks.create),
    app.put('/tasks/:id', tasks.update),
    app.delete('/tasks/:id', tasks.destroy)
    
}