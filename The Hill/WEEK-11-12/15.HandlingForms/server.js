const express = require("express")
const app = express()
const PORT = 3000
const data = []
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.post("/add", (req, res) => {
    data.push(req.body)
    res.redirect("/")
})

app.get("/", (req, res) => {
    res.render("index", { data })
})

app.get("/add", (req, res) => {
    res.render("add")
})

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`)
})
