var home = require('../controller/nesteds')
var path = require('path');

module.exports = (app) => {
    app.get('/',home.index),

    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
      });
}

