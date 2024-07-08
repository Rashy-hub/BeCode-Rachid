function crudRouter(baseRoute) {
    const router = require("express").Router()
    router.get(`/${baseRoute}`, (req, res) => {
        res.send(`This is a GET request to get all ${baseRoute}`)
    })

    router.get(`/${baseRoute}/:id`, (req, res) => {
        const resourceId = req.params.id

        res.send(`This is a GET request to get ${baseRoute} with ID: ${resourceId}`)
    })

    router.post(`/${baseRoute}`, (req, res) => {
        const newResource = req.body

        res.send(`This is a POST request to create a new ${baseRoute} with value of ${newResource}`)
    })

    router.put(`/${baseRoute}/:id`, (req, res) => {
        const resourceId = req.params.id
        const updatedResource = req.body

        res.send(`This is a PUT request to update ${baseRoute} with ID: ${resourceId} updated with ${updatedResource}`)
    })

    router.delete(`/${baseRoute}/:id`, (req, res) => {
        const resourceId = req.params.id

        res.send(`This is a DELETE request to delete ${baseRoute} with ID: ${resourceId}`)
    })
    return router
}

module.exports = crudRouter
