const { Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = require('./database')

class transactions extends Model {}

transactions.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'transactions'
})

transactions.sync()

module.exports = transactions