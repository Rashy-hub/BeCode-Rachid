const userController = {
    // Define default methods (can be overridden in instances)
    getAll: async (req, res) => {
        res.send(`This is a GET request to get all user`)
    },
    getById: async (req, res) => {
        const resourceId = req.params.id
        res.send(`This is a GET request to get user with ID: ${resourceId}`)
    },
    create: async (req, res) => {
        const newResource = req.body
        res.send(`This is a POST request to create a new user with value of ${JSON.stringify(newResource)}`)
    },
    update: async (req, res) => {
        const resourceId = req.params.id
        const updatedResource = req.body
        res.send(`This is a PUT request to update user with ID: ${resourceId} updated with ${JSON.stringify(updatedResource, null, 2)}`)
    },
    delete: async (req, res) => {
        const resourceId = req.params.id
        res.send(`This is a DELETE request to delete user with ID: ${resourceId}`)
    },
}

module.exports = userController
