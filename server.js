if (process.env.NODE_ENV !== 'prduction'){
    require('dotenv').load()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const indexRouter = require('./controllers/index')
const mongooese = require('mongoose')
const db = mongooese.connection


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout' )
app.use(expressLayouts)
app.use(express.static('public'))
app.use('/', indexRouter)

app.listen(process.env.PORT || 3000)

mongooese.connect(process.env.DATABASE_URL, { useNewUrlParser: true})

db.on('error', error => console.error(error));
db.once('open', () => console.log('Connect to Mongo DB'))