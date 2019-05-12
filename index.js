const path = require('path')
const express = require('express')
const edge = require('express-edge')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = new express()

app.use(express.static('public'))
app.use(edge)
app.set('views', `${__dirname}/views`)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect('mongodb://localhost/node-js-blog', { useNewUrlParser: true })


app.get('/', (req, res) => {
    res.render('index')
})

app.post('/post/store', (req, res) => {
    res.redirect('/')   
})

app.get('/post/new', (req, res) => {
    res.render('create')
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