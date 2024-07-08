const express = require("express")
const PORT = 3000
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const checkPass = (req, res, next) => {
    const { password } = req.query
    if (password === "IAmTheBigBoss") {
        next()
    } else {
        res.send("Not authorized")
    }
}

app.use((req, res, next) => {
    if (req.get("Authorization") === "123") {
        next()
    } else {
        res.send("Not authorized")
    }
})

app.post("/", (req, res) => {
    console.log(req.body)
    res.send("data posted")
})
app.get("/secret", checkPass, (req, res) => {
    res.sendFile("./views/secret.html", { root: __dirname })
})
app.listen(PORT, () => {
    console.log(`server listening at port ${PORT}`)
})
