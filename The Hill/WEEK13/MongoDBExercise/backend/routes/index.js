const bodyValidation = require("../middlewares/bodyValidation")

class CrudRouter {
    constructor(baseRoute, crudController, validators) {
        this.baseRoute = baseRoute
        this.crudController = crudController
        this.validators = validators
        this.router = require("express").Router()

        // Register default methods with the router
        this.registerRoutes()
    }

    // Register all defined methods with the router
    registerRoutes() {
        this.router.get(`/${this.baseRoute}`, this.crudController.getAll)
        this.router.get(`/${this.baseRoute}/:id`, this.crudController.getById)
        this.router.post(`/${this.baseRoute}`, bodyValidation(this.validators.bodyValidator), this.crudController.create)
        this.router.put(`/${this.baseRoute}/:id`, bodyValidation(this.validators.bodyValidator), this.crudController.update)
        this.router.delete(`/${this.baseRoute}/:id`, this.crudController.delete)
    }

    // Get the Express router instance
    getRouter() {
        return this.router
    }
}

module.exports = CrudRouter
