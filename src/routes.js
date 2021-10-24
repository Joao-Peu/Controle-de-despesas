const express = require('express')
const router = express.Router()

// file imports
const Transactions = require('./Controllers/TransactionsController')

// import Database
const transactions = require('./database/Transactions')

router.get('/', (req, res) => {
    var errorMsg = req.flash('errorMsg')
    var name = req.flash('name')
    var value = req.flash('value')

    errorMsg = (errorMsg == undefined || errorMsg.length == 0) ? undefined : errorMsg
    name = (name == undefined || name.length == 0) ? '' : name
    value = (value == undefined || value.length == 0) ? '' : value

    transactions.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(allTransactions => {
        var revenues = allTransactions
        console.log(revenues);
        res.render('index',{
            allTransactions,
            errorMsg,
            name,
            value
        })
    }).catch(error => {
        console.log(error);
    })

})

router.post('/addTransaction', Transactions.AddTransaction)

module.exports = router