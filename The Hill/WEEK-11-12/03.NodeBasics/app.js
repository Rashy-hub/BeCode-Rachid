const { readFile, deleteFileAndParents, createFile } = require("./filesHandler")
const { decoyHandler, streamHandler } = require("./streamHandler")
const { myArray, pi, myObj } = require("./part")
const os = require("os")

/* console.log("this is a basic node test")
console.log(`directory name ${__dirname}`)
console.log(`file name ${__filename}`)
myArray.forEach((item) => console.log(item))
console.log(`the value of pi is ${pi}`)
console.log(JSON.stringify(myObj)) */

console.log(`the user home directory is ${os.homedir}  using this operating system ${os.type()}`)
async function fileProcessing() {
    try {
        await createFile("./test/notes.txt", "I am a BeCode warrior")
        console.log("File created successfully!")
    } catch (error) {
        console.error("Error creating file:", error)
    }

    try {
        const content = await readFile("./test/notes.txt")
        console.log("File content:", content)
    } catch (error) {
        console.error("Error reading file:", error)
    }

    try {
        await deleteFileAndParents("./test/notes.txt")
        console.log("File deleted successfully!")
    } catch (error) {
        console.error("Error deleting file:", error)
    }
}

fileProcessing()
streamHandler("./assets/index.html", "./assets/copy.html")
