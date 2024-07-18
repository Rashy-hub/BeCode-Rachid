function extractPaths(data) {
    const paths = []
    for (const item of data) {
        const route = item.route
        if (route && route.path) {
            paths.push(route.path)
        }
    }
    return paths
}

module.exports = extractPaths
