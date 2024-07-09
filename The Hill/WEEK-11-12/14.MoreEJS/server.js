const express = require("express")
const app = express()
const PORT = 3000

const posts = [
    {
        title: "Post one",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "King Philippe",
    },
    {
        title: "Post two",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Barack Obama",
    },
    {
        title: "Post three",
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente, tempora! Voluptatibus, quod.",
        author: "Nelson Mandela",
    },
]

app.set("view engine", "ejs")

app.get("/", (req, res) => {
    res.render("index", { posts: posts })
})
app.get("/about", (req, res) => {
    res.render("about")
})

app.get("/contact", (req, res) => {
    res.render("contact")
})

app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`)
})
