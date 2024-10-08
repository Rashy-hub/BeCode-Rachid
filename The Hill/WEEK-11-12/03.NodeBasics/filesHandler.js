const path = require("path")
const fs = require("fs")

async function createFile(localPath, data) {
    // parse the path to extract directory and file name
    const parsedPath = path.parse(localPath)
    //try to create directory and check if it exist

    try {
        fs.mkdirSync(parsedPath.dir)
        console.log("Directory created successfully!")
    } catch (error) {
        if (error.code === "EEXIST") {
            console.log("Directory already exists ! ")
        } else {
            return Promise.reject(`Error creating directory: ${error}`)
        }
    }
    //then check if file exists
    if (fs.existsSync(localPath)) return Promise.reject(`this file ${parsedPath.base} already exist`)

    // write file then
    await fs.promises.writeFile(localPath, data, "utf-8")
    return `${localPath} successfuly created `
}

async function readFile(localPath) {
    try {
        if (!fs.existsSync(localPath)) {
            return Promise.reject(`File '${localPath}' does not exist`)
        }

        const data = await fs.promises.readFile(localPath)

        //
        return data.toString()
    } catch (error) {
        // Handle errors gracefully
        console.error("Error reading file:", error)
        return Promise.reject(error) // Re-throw the error for further handling
    }
}

// Remove the file
async function deleteFileAndParents(filepath) {
    try {
        await fs.promises.unlink(filepath) // Delete the file

        //here we should also delete folder
    } catch (err) {
        throw new Error(`Failed to delete file or parent directories: ${filepath}`, err) // Re-throw with formatted message
    }
}

module.exports = { readFile, deleteFileAndParents, createFile }
