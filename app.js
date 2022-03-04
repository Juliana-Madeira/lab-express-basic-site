const express = require('express'); 

const app = express(); 

app.use(express.static('public'))

app.get('/home', (require, response) => {
    response.sendFile(`${__dirname}/views/home.html`)
})

app.get('/about', (require, response) => {
    response.sendFile(`${__dirname}/views/about.html`)
})

app.get('/works', (require, response) => {
    response.sendFile(`${__dirname}/views/works.html`)
})

app.get('/photos', (require, response) => {
    response.sendFile(`${__dirname}/views/photos.html`)
})



app.listen(3000, () => {
    console.log('server is running on port 3000')
})

