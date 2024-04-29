//Program that ask the user his name and what is its favorite animal between cat and dog and make a comment

const name = prompt('What is your name')
const animal = prompt('What is your favorite animal : dog or cat ?').trim().toLowerCase()
if (animal === 'dog') {
    alert('Dog Are the best friends')
} else if (animal === 'cat') {
    alert('Cats are crazy during night')
} else {
    alert('I said choose between dog or cat ...')
}

//Make this condition true by changing mystery value

const mystery = 'Patrol7' //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

// LEAVE THIS CODE ALONE! (pretty please)
if (mystery[0] === 'P' && mystery.length > 5 && mystery.indexOf('7') !== -1) {
    console.log('YOU GOT IT!!!')
} else {
    console.log('TRY AGAIN')
}

/*using prompt() and alert(), ask a user for their age.

IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off"

IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!"

IF they say they are over 18, respond with: "Powering On. Enjoy the ride!" */

let age = parseInt(prompt('Enter your age please'))

while (!Number.isInteger(age) || age <= 0) {
    age = parseInt(prompt('Please enter a correct positive integer number for your age'))
}
let message = `Your age is ${age} : `
if (age > 18) {
    message += ' Powering On. Enjoy the ride!'
} else if (age < 18) {
    message += ' Sorry, you are too young to drive this car. Powering off'
} else {
    message += ' Congratulations on your first year of driving. Enjoy the ride!'
}

alert(message)

/*- Ask the user what is his favorite fruit.
  - If it's `bananas`, tell him you like bananas as well.
  - If it's `strawberry`, tell him you LOVE strawberries.
  - If it's `grape`, aks him if he prefers purple or green grapes.
    - If it's `purple`, tell him you don't like purple grapes.
    - If it's `green`, tell him green grapes are ok...
    - If it's not purple or green, tell him you don't understand.
  - If it's another thing, tell him you don't understand the word he said (displaying the word he said).
*/
let favoritFruit
mainloop: do {
    favoritFruit = prompt('What is your favorite fruit ? (type "quit" to leave)').trim().toLowerCase()
    switch (favoritFruit) {
        case 'bananas':
            alert('I like bananas as well')
            break
        case 'strawberry':
            alert('I LOVE strawberries')
            break
        case 'grape':
            let variant = prompt('Do you prefer purple or green grapes ? ').trim().toLocaleLowerCase()
            if (variant === 'purple') alert("I don't like purple grapes")
            else if (variant === 'green') alert('Green grapes are ok')
            else alert("I don't understand !")
            break
        case 'quit':
            break mainloop

        default:
            alert(`I don't understand that word : ${favoritFruit}`)
            break
    }
} while (favoritFruit != 'quit')
