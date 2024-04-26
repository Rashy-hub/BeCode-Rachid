//Main directory for your exercices

export const dirName = 'Exercices'

export const extractedExoListNames = []
export const directoryHandlers = []

async function* getFilesRecursively(entry, parentPath = '') {
    if (entry.kind === 'file' && entry.name.endsWith('.html')) {
    } else if (entry.kind === 'file' && entry.name.endsWith('.js')) {
        let file = await entry.getFile()
        if (file !== null) {
            yield { parentPath: parentPath, fileName: file.name }
        }
    } else if (entry.kind === 'directory' && entry.name != dirName) {
        console.log(entry)
        directoryHandlers.push(entry)
        parentPath = entry.name

        for await (const handle of entry.values()) {
            yield* getFilesRecursively(handle, parentPath)
        }
    } else if (entry.kind === 'directory') {
        parentPath = entry.name

        for await (const handle of entry.values()) {
            yield* getFilesRecursively(handle, parentPath)
        }
    }
}

async function getDirHandler() {
    try {
        // Open the directory picker using the File System Access API
        const dirHandle = await window.showDirectoryPicker({
            id: 'my-directory-picker',
        })
        //console.log(dirHandle)
        if (!dirHandle) {
            throw new Error('No directory selected')
        }

        // Return the directory handle
        return dirHandle
    } catch (error) {
        console.error('Error getting directory:', error)
        return null // Return null in case of errors
    }
}
export async function locateFiles() {
    try {
        const directoryHandle = await getDirHandler() // Replace with
        console.log(JSON.stringify(directoryHandle))
        for await (const file of getFilesRecursively(directoryHandle)) {
            extractedExoListNames.push(file)
        }
        // console.log(directoryHandlers)
        localStorage.setItem(
            'extractedList',
            JSON.stringify(extractedExoListNames)
        )
        console.log(`directoryHandlers status ${directoryHandlers}`)
        buildList()

        return new Promise((resolve) => {
            // Code that resolves the promise with someValue
            resolve(true)
        })
    } catch (error) {
        console.error('Error fetching files:', error)
    }
}

async function buildList() {
    for (const file of extractedExoListNames) {
        const listElement = document.createElement('li')
        const linkListElement = document.createElement('a')

        linkListElement.setAttribute(
            'href',
            `${dirName}/${file.parentPath}/index.html`
        )
        linkListElement.setAttribute('target', '_blank')
        const scriptUrl = `${file.parentPath}/${file.fileName}`
        linkListElement.textContent = scriptUrl
        listElement.appendChild(linkListElement)

        exoList.appendChild(listElement)
    }
}

export function checkIfListExist() {
    console.log('check if List already exist in LocalStorage')

    if (localStorage.getItem('extractedList') !== null) {
        const storedExoList = JSON.parse(localStorage.getItem('extractedList'))
        console.log('local storage is not empty')
        for (const element of storedExoList) {
            if (typeof element === 'object') {
                extractedExoListNames.push({ ...element }) // Copie des propriétés de l'objet
            } else {
                extractedExoListNames.push(element) // Copie des éléments primitifs
            }
        }
        buildList()
    }
}
