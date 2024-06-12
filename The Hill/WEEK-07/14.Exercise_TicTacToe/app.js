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

/*Create 9 divs inside board with the class cell
In your css, make sure board and cells look like the game grid
We are going to use the strategy of putting the letters x and o inside the divs in order to play the game. (you can do it differently, but you will have to adapt your js)

In your js, you can start defining all the winning combinations with an array of arrays : */
/*You will need an array of 9 entries playedCells to hold the choices of the players. (you can start with empty strings, and then it will be filled with x and o)

Keep track of the current player (in a variable) and assign it to x or o

Keep track if the game is running or over

In the initialization of the game, add an event listener to each cell.

When a cell is clicked, fill the playedCells with the current player in the correct position

Check if there is a win comparing the winCombinations array to the playedCells */
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
