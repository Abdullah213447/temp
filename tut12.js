//HTTP MODULE (server)

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req); //giant object (visible on terminal after refreshing page running on port.)
    if (req.url === '/') {
        res.end('Welcome User!'); // Home Page (visible on page running on port.)
    }
    if (req.url === '/about') {
        res.end('Welcome to About Page!'); //About Page
    }
    res.end(`
    <h1>Oops!</h1>
    <p>Page Not Found</p>
    <a href="/"> Back Home
    `); //if client wants to navigate to a page that is not created (error message and link to go back to home page.)
})

server.listen(5000); //port->localhost:5000

