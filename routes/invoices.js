const express = require('express');
const router = express.Router();

// Get All Customers
router.get('/', (req, res) => {
    res.send('Invoices');
});

module.exports = router;