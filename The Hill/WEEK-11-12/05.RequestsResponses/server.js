const http = require("http")
const fs = require("fs")
const path = require("path")

const server = http.createServer(async (req, res) => {
    // Handle specific routes using conditional statements
    if (req.url === "/") {
        try {
            res.writeHead(200, { "Content-Type": "text/html" })
            const result = await fs.promises.readFile(path.join(__dirname, "./views/index.html"))

            res.end(result)
        } catch (error) {
            res.writeHead(501, { "Content-Type": "text/plain" })
            res.write(`${error} something went wrong`)
            res.end()
        }
    } else if (req.url === "/services") {
        res.writeHead(200, { "Content-Type": "text/plain" })
        res.end("This is the services page , work in progress.")
    } else {
        // Handle unmatched routes (e.g., 404 Not Found)
        res.writeHead(404, { "Content-Type": "text/plain" })
        res.end("404 Not Found")
    }
})

server.listen(3000, "localhost", () => console.log("server listening on port 3000"))
