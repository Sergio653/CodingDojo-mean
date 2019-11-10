//set-up
const express = require('express');
const app = express();
const server = app.listen(8000);
//views and static
app.use(express.static(__dirname + "/test/dist/test"));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//body.req
app.use(express.urlencoded({extended: true}));
//mongoose
require('./server/config/routes')(app)
require('./server/config/mongoose')
