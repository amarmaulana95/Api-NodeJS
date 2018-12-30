const express = require('express');

var app = express();

//diambil dari route
app.use('/api', require('./penggunaRoutes'));

module.exports = app;

