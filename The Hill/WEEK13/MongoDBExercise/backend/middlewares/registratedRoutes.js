const extractPaths = require("../utils/utils")
const registratedRoutes = []
function extractRoutes(req, res, next) {
    const extractedPaths = []
    registratedRoutes.forEach((crudRoute) => {
        extractedPaths.push(...extractPaths(crudRoute.stack))
    })
    req.extractedPaths = extractedPaths

    next()
}

module.exports = { registratedRoutes, extractRoutes }
