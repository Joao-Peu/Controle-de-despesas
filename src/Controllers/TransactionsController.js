const transactions = require('../database/Transactions')

class Transactions {
    static AddTransaction(req, res, next) {
        var name = req.body.nameTransaction
        var amount = req.body.valueTransaction

        if (name.length != 0 && amount.length != 0) {
            if (isNaN(name)) {
                transactions.create({
                    name: name,
                    amount: amount
                }).then(() => {
                    res.redirect('/')
                }).catch(error => {
                    console.log(error);
                    res.redirect('/')
                })
            } else {
                req.flash('value', amount)
                req.flash('errorMsg', 'O Nome deve ser uma palavra')
                res.redirect('/')
            }
        } else {
            req.flash('name', name)
            req.flash('value', amount)
            req.flash('errorMsg', 'preencha os campos corretamente')
            res.redirect('/')
        }
        
    }

    static RemoveTransaction(req, res, next) {
        var id = req.body.id

        transactions.destroy({
            where: {id: id}
        }).then(() => {
            res.redirect('/')
        }).catch(error => {
            console.log(error);
            res.redirect('/')
        })
    }
}

module.exports = Transactions