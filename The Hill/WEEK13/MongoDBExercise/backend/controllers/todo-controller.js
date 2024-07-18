const fs = require("fs")
const path = require("path")

const todoController = {
    getAll: async (req, res) => {
        try {
        } catch (err) {
            res.status(500).send("Error while getting all")
        }
    },
    getById: async (req, res) => {
        try {
        } catch (err) {
            console.error(err)
            res.status(500).send("Error while getting by id")
        }
    },
    create: async (req, res) => {
        try {
        } catch (err) {
            console.error(err)
            res.status(500).send("Error while creating")
        }
    },
    update: async (req, res) => {
        try {
        } catch (err) {
            console.error(err)
            res.status(500).send("Error while updating")
        }
    },
    delete: async (req, res) => {
        try {
        } catch (err) {
            console.error(err)
            res.status(500).send("Error while deleting")
        }
    },
}

module.exports = todoController
