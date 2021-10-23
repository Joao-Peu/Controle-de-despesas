class Transactions {
    static AddTransaction(req, res, next) {
        var name = req.body.nameTransaction
        var value = req.body.valueTransaction
        
        console.log(name, value)
    }
}

module.exports = Transactions