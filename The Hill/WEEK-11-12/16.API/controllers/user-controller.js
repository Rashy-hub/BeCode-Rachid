const fs = require("fs")
const path = require("path")

const usersFile = "../data/users.json"

const userController = {
    // Define default methods
    getAll: async (req, res) => {
        try {
            const usersData = await fs.promises.readFile(path.join(__dirname, usersFile), "utf8")
            const users = JSON.parse(usersData)
            res.send(users)
        } catch (err) {
            console.error(err)
            res.status(500).send("Error reading users.json")
        }
    },
    getById: async (req, res) => {
        try {
            const usersData = await fs.promises.readFile(usersFile, "utf8")
            const users = JSON.parse(usersData)
            const resourceId = req.params.id
            const user = users.find((user) => user.id === parseInt(resourceId))
            if (user) {
                res.send(user)
            } else {
                res.status(404).send("User not found")
            }
        } catch (err) {
            console.error(err)
            res.status(500).send("Error reading users.json")
        }
    },
    create: async (req, res) => {
        try {
            const usersData = await fs.promises.readFile(path.join(__dirname, usersFile), "utf8")
            const users = JSON.parse(usersData)
            const newResource = req.body
            // Check for unique ID (assuming 'id' is the unique identifier)
            const existingUser = users.find((user) => user.id === newResource.id)
            if (existingUser) {
                return res.status(400).send("User with this ID already exists")
            }
            // Assign a new ID if not provided
            if (!newResource.id) {
                const lastId = users.length ? Math.max(...users.map((u) => u.id)) : 0
                newResource.id = lastId + 1
            }
            users.push(newResource)
            await fs.promises.writeFile(path.join(__dirname, usersFile), JSON.stringify(users, null, 2))
            res.send("User created successfully")
        } catch (err) {
            console.error(err)
            res.status(500).send("Error creating user")
        }
    },
    update: async (req, res) => {
        try {
            const usersData = await fs.promises.readFile(path.join(__dirname, usersFile), "utf8")
            const users = JSON.parse(usersData)
            const resourceId = req.params.id
            const updatedResource = req.body
            const userIndex = users.findIndex((user) => user.id === parseInt(resourceId))
            if (userIndex !== -1) {
                users[userIndex] = updatedResource
                await fs.promises.writeFile(path.join(__dirname, usersFile), JSON.stringify(users, null, 2))
                res.send("User updated successfully")
            } else {
                res.status(404).send("User not found")
            }
        } catch (err) {
            console.error(err)
            res.status(500).send("Error updating user")
        }
    },
    delete: async (req, res) => {
        try {
            const usersData = await fs.promises.readFile(path.join(__dirname, usersFile), "utf8")
            const users = JSON.parse(usersData)
            const resourceId = req.params.id
            const userIndex = users.findIndex((user) => user.id === resourceId)
            if (userIndex !== -1) {
                users.splice(userIndex, 1)
                await fs.promises.writeFile(path.join(__dirname, usersFile), JSON.stringify(users, null, 2))
                res.send("User deleted successfully")
            } else {
                res.status(404).send("User not found")
            }
        } catch (err) {
            console.error(err)
            res.status(500).send("Error deleting user")
        }
    },
}

module.exports = userController
