/*Let's do something a little bit more complex.

We are going to create a "score keeper".

Let's say you are playing ping-pong with your friend and you are playing "best of 5". That means : after 5 games, the player that won the most games gets the trofy.

You want to create a program that counts how many games player 1 wins and how many games player 2 wins.

We will do this trough buttons.

There is a button for each player that increments the score.

When we arrive at 5 total games, the buttons are disabled (we can't click them anymore). And the score of the winner becomes green and the color of the loser becomes red.

Then, you can click on a button reset to start all over again. */

const scoreResult = document.querySelector(".scoreresult")
const player1Button = document.getElementById("player1")
const player2Button = document.getElementById("player2")
const resetButton = document.getElementById("reset")

const scoreResultState = { player1: 0, player2: 0 }

function ScoreHandler(event) {
    console.log("Event fired " + event.target.id)
    if (event.target.id === "player1") {
        scoreResultState.player1++
    } else {
        scoreResultState.player2++
    }
    UpdateDisplay()
}
function ResetHandler(event) {
    console.log("Event fired " + event.target.id)
    scoreResultState.player1 = 0
    scoreResultState.player2 = 0
    UpdateDisplay()
}
function UpdateDisplay() {
    document.documentElement.style.setProperty("--scoreResult-player1-Content", `"${scoreResultState.player1}"`)
    document.documentElement.style.setProperty("--scoreResult-player2-Content", `"${scoreResultState.player2}"`)
    if (scoreResultState.player1 >= 5) {
        player1Button.setAttribute("disabled", "true")
        player2Button.setAttribute("disabled", "true")
        document.documentElement.style.setProperty("--scoreResult-player1-Color", "#00FF00")
        document.documentElement.style.setProperty("--scoreResult-player2-Color", "#FF0000")
    } else if (scoreResultState.player2 >= 5) {
        player1Button.setAttribute("disabled", "true")
        player2Button.setAttribute("disabled", "true")
        document.documentElement.style.setProperty("--scoreResult-player2-Color", "#00FF00")
        document.documentElement.style.setProperty("--scoreResult-player1-Color", "#FF0000")
    } else {
        player1Button.removeAttribute("disabled")
        player2Button.removeAttribute("disabled")
        document.documentElement.style.setProperty("--scoreResult-player1-Color", "#000")
        document.documentElement.style.setProperty("--scoreResult-player2-Color", `#000`)
    }
}

player1Button.addEventListener("click", ScoreHandler)
player2Button.addEventListener("click", ScoreHandler)
resetButton.addEventListener("click", ResetHandler)

// Here is how to use Content with
//--scoreResult-before-Content: '0';
//--scoreResult-after-Content: '0';
//document.documentElement.style.setProperty('--color', "#00f")
