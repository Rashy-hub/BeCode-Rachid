const express = require("express")
const path = require("path")

const app = express()
const port = 3000

const viewsDir = path.join(__dirname, "views")

app.use(express.static("views"))

// Route for POST request
app.post("/", (req, res) => {
    const data = {
        school: "BeCode",
        year: "2023",
    }
    res.json(data)
})

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, "./views/404.html"))
})
app.listen(port, () => {
    console.log(`Listening to port ${port}`)
})
