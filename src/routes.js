const express = require('express')
const router = express.Router()

// file imports
const Transactions = require('./Controllers/Transactions')

router.get('/', (req, res) => {
    res.render('index')
})

router.post('/addTransaction', Transactions.AddTransaction)

module.exports = router