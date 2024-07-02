const { fileWriteHandler, readFileHandler } = require("./filesHandler")

const { myArray, pi, myObj } = require("./part")
const os = require("os")

/* console.log("this is a basic node test")
console.log(`directory name ${__dirname}`)
console.log(`file name ${__filename}`)
myArray.forEach((item) => console.log(item))
console.log(`the value of pi is ${pi}`)
console.log(JSON.stringify(myObj)) */

console.log(`the user home directory is ${os.homedir}  using this operating system ${os.type()}`)

fileWriteHandler("./test/notes.txt", "I am a BeCode warrior")
readFileHandler("./test/notes.txt")
