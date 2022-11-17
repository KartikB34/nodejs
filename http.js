const http = require("http");
const fs = require("fs");

// http.createServer((req,res,next) => {

const PORT = process.env.PORT;
// const hostname = "localhost";      /use while using localhost no need at heroku deployment
const home = fs.readFileSync("./index.html")

const server = http.createServer((req,res) => {
    
    if(req.url ==="/")
    return res.end(home);

    if(req.url==="/about")
    return res.end('<h1>About me</h1>');

    if(req.url==="/contact")
    return res.end('<h1>contact me</h1>');

    if(req.url==="/service"){
    return res.end('<h1>service me</h1>');
    }else{
        return res.end("404 Page not found");
    }
})

server.listen(PORT, () => {

    console.log(`Server is working`)
})