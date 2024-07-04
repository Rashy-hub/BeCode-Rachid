const http = require("http")

const server = http.createServer((req, res) => {
    console.log(`Received request: ${req.method} ${req.url}`)
    res.statusCode = 200
    res.setHeader("Content-Type", "text/plain")
    res.end("Hello from your enhanced Node.js server!")
})

server.listen(3000, "localhost", () => {
    console.log("Server listening on port 3000")
})
