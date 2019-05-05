const http = require('http')
const fs = require('fs')

const homePage = fs.readFileSync('index.html')
const aboutPage = fs.readFileSync('about.html')

const server = http.createServer((request, response) => {
    
   if (request.url === '/about') {
        return response.end(aboutPage)
    } else if (request.url === '/') {
        return response.end(homePage)
    } else {
        response.writeHead(404)
        return response.end('Page not found!!')
    }

})


server.listen(3000)