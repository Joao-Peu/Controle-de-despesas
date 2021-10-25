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
        var sum = 0
        var subtraction = 0
        var balance = 0
        revenues.forEach(revenue => {
            if (revenue.amount >= 0) {
                sum += Number(revenue.amount)
            } else {
                subtraction -= revenue.amount
            }
        });
        balance = sum - subtraction
        res.render('index',{
            allTransactions,
            sum,
            subtraction,
            balance,
            errorMsg,
            name,
            value
        })
    }).catch(error => {
        console.log(error);
    })

})

router.post('/addTransaction', Transactions.AddTransaction)

router.post('/delete', Transactions.RemoveTransaction)

module.exports = router