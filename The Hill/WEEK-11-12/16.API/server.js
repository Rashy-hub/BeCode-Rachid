const express = require("express")
const requestLogger = require("./middlewares/requestLogger")

const CrudRouter = require("./routes/index.js")

const { userBodyValidator } = require("./validators/userValidator.js")
const userController = require("./controllers/user-controller.js")
const { registratedRoutes, extractRoutes } = require("./middlewares/registratedRoutes.js")

const app = express()
const PORT = 3000

app.use(express.json())
//this middleWare will log url request , http verb and also status in an async way
app.use(requestLogger)

//this way you can create classic CRUD defaults routes for any ressources you want
const usersCrud = new CrudRouter("users", userController, userBodyValidator)

//those routes will  be displayed in public when 404 error
registratedRoutes.push(usersCrud.getRouter())

app.use("/api", ...registratedRoutes)

app.use("*", extractRoutes, (req, res) => {
    /*   const extractedPaths = []
    registratedRoutes.forEach((crudRoute) => {
        extractedPaths.push(...extractPaths(crudRoute.stack))
    })
 */
    const errorMessage = "Page not found. Available routes:"
    const responseBody = {
        error: errorMessage,
        availableRoutes: req.extractedPaths,
    }

    res.status(404).json(responseBody)
})
app.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`)
})
