const express = require("express")
const { MongoClient } = require("mongodb")

const app = express()

const url = "mongodb://127.0.0.1:27017"
let db

MongoClient.connect(url)
    .then((client) => {
        db = client.db("blog")
        console.log(db.databaseName)
    })
    .then(() => {
        app.listen(3000, () => {
            console.log("Server running on port 3000")
        })
    })
    .catch((err) => console.log(err))
