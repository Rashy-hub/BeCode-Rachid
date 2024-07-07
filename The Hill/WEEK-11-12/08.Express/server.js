const express = require("express")
const path = require("path")

const app = express()
const port = 3000

const viewsDir = path.join(__dirname, "views")

//app.use(express.static("views", { extensions: ["html"] }))

// Route for POST request
app.get("/", (req, res) => {
    res.sendFile("./views/index.html", { root: __dirname })
})
// Manualy send the css file
app.get("/style.css", (req, res) => {
    res.sendFile("./views/style.css", { root: __dirname })
})
app.get("/about*", (req, res) => {
    res.sendFile("./views/about.html", { root: __dirname })
})

app.get("/about-us", (req, res) => {
    console.log(req.url)
    res.redirect("/about")
})
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
