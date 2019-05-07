const path = require('path')
const express = require('express')
const edge = require('express-edge');

const app = new express()
app.use(express.static('public'))
app.use(edge)
// app.set('view engine', 'express-edge')
app.set('views', `${__dirname}/views`)


app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/post', (req, res) => {
    res.render('post')
})




app.listen(60000, () => {
    console.log('app listening on port 60000.')
})