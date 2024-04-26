console.log('main entry point')
import {
    checkIfListExist,
    locateFiles,
    extractedExoListNames,
    directoryHandlers,
} from './libs.js'

const locateButton = document.getElementById('locatebutton')
const exoContainer = document.getElementsByClassName('exocontainer')
const exoList = document.getElementById('exoList')

async function initMainEventListener() {
    locateButton.addEventListener('click', async () => {
        console.log('Clear the list')
        exoList.innerHTML = ''
        extractedExoListNames.length = 0
        directoryHandlers.length = 0
        localStorage.removeItem('extractedList')
        await locateFiles()
    })
}

checkIfListExist()
initMainEventListener()
