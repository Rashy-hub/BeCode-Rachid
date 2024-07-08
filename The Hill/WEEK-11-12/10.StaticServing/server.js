const express = require("express")

const app = express()
const PORT = 3000

app.use(express.static("views"))

app.get("/", (req, res) => {
    res.sendFile("./views/index.html")
})

app.listen(PORT, (req, res) => {
    console.log(`Server is listening at port ${PORT}`)
})
