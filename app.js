const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Mongoose Connect
mongoose.connect('mongodb://localhost/invocer');
const db = mongoose.connection;


const app = express();
const port = 3000;

// Enable CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods','GET, POST, PUT, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Client Folder
app.use(express.static(__dirname + '/client'));

// Body Parser
app.use(bodyParser.json());

// Route
app.get('/', (req, res) => {
    res.send('<h2>Please use /api/customers or /api/invoices</h2>');
});

// Route Files
const customers = require('./routes/customers');
const invoices = require('./routes/invoices');

// Paths
app.use('/api/customers', customers);
app.use('/api/invoices', invoices);

// Run Server
app.listen(port , () => {
    console.log('Server run on localhost:' + port);
});
