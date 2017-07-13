const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Client Folder
app.use(express.static(__dirname + '/client'));

// Body Parser
app.use(bodyParser.json());

// Route
app.get('/', (req, res) => {
    res.send('<h2>Please use /api/customers or /api/invoices</h2>');
});

// Run Server
app.listen(port , () => {
    console.log('Server run on localhost:' + port);
});