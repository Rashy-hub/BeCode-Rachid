function registratedRoutes(req, res, next) {
    const extractedPaths = []
    registratedRoutes.forEach((crudRoute) => {
        extractedPaths.push(...extractPaths(crudRoute.stack))
    })
    res.extractedPaths = extractedPaths

    next()
}

module.exports = requestLogger
