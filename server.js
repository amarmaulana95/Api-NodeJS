//import modul
require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//x-www-form-urlencoded parser
app.use(bodyParser.urlencoded({
    extended: true
}));
// parse application/json untuk api
app.use(bodyParser.json());

app.use(require('./router/indexRoutes'));

//koneksi ke mongodb
mongoose.connect('mongodb://localhost:27017/jurnal', { useNewUrlParser: true });

app.listen(process.env.PORT, function() {
    console.log('Api ON PORT 3000')
});