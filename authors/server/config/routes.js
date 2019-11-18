var authors = require('../controllers/authors')
var path = require('path');

module.exports = (app) => {
  app.get('/authors', authors.showAll),
  app.get('/authors/:id', authors.show),
  app.post('/authors', authors.create),
  app.put('/authors/:id', authors.update),
  app.delete('/authors/:id', authors.destroy)
  app.all("*", (req,res,next) => {
      res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}
