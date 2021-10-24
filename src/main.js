// module imports
const express = require('express')
const app = express()
const path = require('path')
const session = require('express-session')
const flash = require('express-flash')
const cookieParse = require('cookie-parser')

// file imports
const routes = require('./routes')

// Database
const database = require('./database/database')
try {
    database.authenticate()
    console.log('conectado ao banco de dados');
} catch (error) {
    console.log(error);
}
const Transactions = require('./database/Transactions')

// configs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))
app.use(express.static(path.join(__dirname, '../public')));
app.use(express.urlencoded({extended: false}))
app.use(session({
    secret: 'password',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 60000}
}))
app.use(cookieParse('password'))
app.use(flash())

app.use(routes)

app.listen(3000, () => {
    console.log('Server On')
})