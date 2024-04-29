let maxNumber = parseInt(prompt('Please enter a max value'))
while (!Number.isInteger(maxNumber) || maxNumber <= 0) {
    maxNumber = parseInt(prompt('Value must be a positive integer '))
}
let randomNumber = Math.floor(Math.random() * maxNumber) + 1
let userGuess
let counter = 0
do {
    userGuess = parseInt(prompt(`Try to guess my random value , between 1 & ${maxNumber}`))
    counter++
    while (!Number.isInteger(userGuess) || userGuess <= 0) {
        userGuess = parseInt(prompt('Sorry , guessed value must be a positive integer '))
    }
    if (userGuess > randomNumber) {
        alert('Try again lower, its too big')
    } else if (userGuess < randomNumber) {
        alert('Try again higher, its too low')
    } else {
        alert(`Congratulation! You did it in ${counter} attempts `)
    }
} while (randomNumber != userGuess)
