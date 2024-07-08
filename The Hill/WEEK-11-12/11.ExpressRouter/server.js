const express = require("express")
const createRouter = require("./routes/index.js")
const logRequest = require("./middlewares/requestLogger.js")

const app = express()

const PORT = 3000

app.use(logRequest)

const userCrud = createRouter("users")
const postsCrud = createRouter("posts")
app.use("/api", userCrud, postsCrud)

app.use("*", (req, res) => {
    const availableRoutes = []

    function extractPaths(data) {
        const paths = []
        for (const item of data) {
            const route = item.route
            if (route && route.path) {
                paths.push(route.path)
            }
        }
        return paths
    }

    const extractedPaths = extractPaths(userCrud.stack)
    extractedPaths.push(...extractPaths(postsCrud.stack))

    const errorMessage = "Page not found. Available routes:"
    const responseBody = {
        error: errorMessage,
        availableRoutes: extractedPaths,
    }

    res.status(404).json(responseBody)
})

app.listen(PORT, (req, res) => {
    console.log(`server is listening at port : ${PORT}`)
})
