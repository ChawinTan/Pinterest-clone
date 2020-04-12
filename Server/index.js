var express = require('express');
var bodyParser =  require('body-parser');
var cors  = require('cors');
var fs = require('fs');
var https = require('https');
var passport = require("passport")

const options = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

var userRoutes = require('./User/user');
var photoRoutes = require('./Photo/photo');
var landingRoutes = require('./Landing/landing');
var searchRoutes = require('./Search/search');

var  app = express();
const server = https.createServer({key: options.key, cert: options.cert}, app);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

app.use('/user', userRoutes); 
app.use('/photo', photoRoutes);
app.use('/landing', landingRoutes);
app.use('/search', searchRoutes)

app.get('/', (req, res) => {
    res.redirect('http://localhost:3000');
})

app.get('/failure', (req, res) => {
    res.status(200).json({ state: 'failure' });
})

server.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
});