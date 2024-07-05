const http = require("http")
const fs = require("fs")

const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === "/") {
        fs.readFile("./views/index.html", (err, data) => {
            if (err) {
                console.log(err)
                res.end()
            } else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.write(data)
                res.end()
            }
        })
    } else if (req.url === "/about") {
        fs.readFile("./views/about.html", (err, data) => {
            if (err) {
                console.log(err)
                res.end()
            } else {
                res.writeHead(200, { "Content-Type": "text/html" })
                res.write(data)
                res.end()
            }
        })
    } else if (req.url === "/about-us") {
        res.setHeader("Location", "/about")
        res.statusCode = 301
        //res.writeHead(301, { "Content-Type": "text/html" })
        res.end()
        return
    } else {
        fs.readFile("./views/404.html", (err, data) => {
            if (err) {
                console.log(err)
                res.end()
            } else {
                res.statusCode = res.writeHead(404, { "Content-Type": "text/html" })
                res.write(data)
                res.end()
            }
        })
    }
})

server.listen(3000, "localhost", () => {
    console.log("server is listening at port 3000")
})
