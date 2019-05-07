const path = require('path')
const express = require('express')

const app = new express()
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'pages/index.html'))
})



app.listen(5000, () => {
    console.log('app listening on port 5000.')
})