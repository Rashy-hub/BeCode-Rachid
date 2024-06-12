console.log("Tic tac toe script starting")

const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]
const initialValue = null
const playedCells = new Array(9).fill(initialValue)
let currentChoice = "X"
let isFinised = false
let nextTurn = 1

const board = document.querySelector(".board")
const message = document.querySelector(".message")
console.log(board)

function clickHandler(event) {
    console.log("cell was clicked")

    if (!isFinised) {
        playedCells[event.target.id] = currentChoice
        // Remove event listener after cell click (using this inside the handler)
        event.target.removeEventListener("click", clickHandler)
        event.target.textContent = currentChoice
        nextTurn++
        if (nextTurn % 2 === 0) {
            event.target.classList.add("X")
            currentChoice = "O"
        } else {
            event.target.classList.add("O")
            currentChoice = "X"
        }

        if (nextTurn >= 4) {
            let winner = checkWinner()
            console.log(winner + " win the game")
            if (winner) {
                isFinised = true
                message.textContent = `The winner is ${winner}`
                message.classList.toggle("show")
            }
        }
    } else {
        event.target.removeEventListener("click", clickHandler)
    }
}

for (let index = 0; index < 9; index++) {
    const element = document.createElement("div")
    element.classList.add("cell")
    board.appendChild(element)
    element.addEventListener("click", clickHandler)
    element.setAttribute("id", index)
}

function checkWinner() {
    const playerXIndexes = retrievePlayerIndexes("X")
    const playerOIndexes = retrievePlayerIndexes("O")

    let winnerisX = winCombinations.some((combination) => {
        // Check if all elements in the combination are present in playerIndexes
        return combination.every((index) => playerXIndexes.includes(index))
    })

    let winnerisO = winCombinations.some((combination) => {
        // Check if all elements in the combination are present in playerIndexes
        return combination.every((index) => playerOIndexes.includes(index))
    })

    if (winnerisX) return "X"
    else if (winnerisO) return "O"
    else return null
}

function retrievePlayerIndexes(player) {
    const playerIndexes = []
    for (let i = 0; i < playedCells.length; i++) {
        if (playedCells[i] === player) {
            playerIndexes.push(i)
        }
    }

    return playerIndexes
}
const restart = document.querySelector(".restart")

restart.addEventListener("click", (event) => {
    playedCells.fill(null)
    const cells = document.querySelectorAll(".cell")
    nextTurn = 1
    isFinised = false
    currentChoice = "X"
    cells.forEach((cell) => {
        cell.textContent = ""
        cell.classList.remove("X")
        cell.classList.remove("O")
        cell.removeEventListener("click", clickHandler)
        cell.addEventListener("click", clickHandler)
    })
    message.classList.remove("show")
})
