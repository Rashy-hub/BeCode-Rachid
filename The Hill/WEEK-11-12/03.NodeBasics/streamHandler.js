const fs = require("fs")

function streamHandler(source, destination) {
    const readStream = fs.createReadStream(source, { encoding: "utf8" })
    const writeStream = fs.createWriteStream(destination, { encoding: "utf-8" })

    try {
        readStream.pipe(writeStream)
    } catch (error) {
        console.log(error)
    }
}
function decoyHandler() {}
module.exports = { streamHandler, decoyHandler }
