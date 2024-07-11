function apiKeyMiddleware(validApiKey = "blabla") {
    return function (req, res, next) {
        const apiKey = req.query.api_key
        console.log(`this is the api_key received : ${req.query.api_key}`)
        if (!apiKey || apiKey !== validApiKey) {
            return res.status(401).json({ message: "Invalid API key" })
        }
        console.log("request accepted ")

        // API key is valid, continue processing the request
        next()
    }
}
module.exports = apiKeyMiddleware
