var express = require('express');
var bodyParser =  require('body-parser');
var cors  = require('cors');

var userRoutes = require('./User/user');

var  app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/user', userRoutes); 

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
});