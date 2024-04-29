/*
---

Now, do this :

- Ask your user what is his name.
- Ask your user how old is he.
- Ask your user where does he live.
- Alert a message presenting the user, his age and where he lives.

---


*/
const name = prompt('What is your name ?')
const age = prompt('What is your age ?')
const place = prompt('Where do you live ?')

const result = `So , your name is ${name} , youe live in ${place} and your are  ${age} years old`
alert(result)

/*
**VAT**

Write an algorithm which receives a price without VAT and returns the price with VAT with a rate of 21%. (prompt the price without VAT and alert the result with VAT)

---
*/
const priceExVat = parseFloat(prompt('Give the price without VAT'))
const resultWithVat = priceExVat * 0.21 + priceExVat
alert(`Price ${priceExVat} € with 21 % VAT is equal to ${resultWithVat.toFixed(2)} €`)

/*
**Surface of a circle**
Write an algorithm which receives the radius of a circle and calculate its surface. (prompt and alert) (serach on Google the formula to do it)

---
*/

const radius = parseFloat(prompt('Type the radius of a circle '))
const surface = radius ** 2 * Math.PI
alert(`The surface of a circle with a radius of ${radius} cm is equal to ${surface.toFixed(2)} cm²`)
/*
**Make a Calculator!** using prompt(), and variables, make a program that does the following:

1. Prompts the user for first number.
2. Stores that first number
3. Prompts the user for the second number.
4. stores that number and responds with the SUM by using an alert.

*/

let operand
mainloop: do {
    const firstNumber = parseFloat(prompt('Enter the first number'))
    const secondNumber = parseFloat(prompt('Enter the second number'))
    operand = prompt('Enter operation (+,-,*,/)')
    let message = `The result of ${firstNumber} ${operand} ${secondNumber} is equal to `
    let calculationResult

    switch (operand) {
        case '+':
            calculationResult = firstNumber + secondNumber

            break
        case '-':
            calculationResult = firstNumber - secondNumber

            break
        case '*':
            calculationResult = firstNumber * secondNumber
            break
        case '/':
            calculationResult = firstNumber / secondNumber
            break

        case 'quit':
            break

        default:
            alert('Wrong operation please type only : + ,- ,* ,/ or quit ')
            break mainloop
    }

    message += calculationResult.toFixed(2)
    alert(message)
    operand = prompt('Do you wich to continue ? type quit to leave')
} while (operand != 'quit')
//BONUS: Make a program that can subtract, multiply, and also divide!

//---
