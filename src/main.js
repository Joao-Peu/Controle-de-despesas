// module imports
const express = require('express')
const app = express()
const path = require('path')

// file imports
const routes = require('./routes')


// configs
app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))
app.use(express.static(path.join(__dirname, '../public')));

app.use(routes)

app.listen(3000, () => {
    console.log('Server On')
})