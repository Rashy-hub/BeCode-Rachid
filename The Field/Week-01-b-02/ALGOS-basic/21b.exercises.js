/*Expected result for, for example, `(6, 5)` (the numbers should be random of course)

```
"Die 1: 4"
"Die 2: 1"
"Die 3: 1"
"Die 4: 6"
"Die 5: 3"
```

--- */

function rollDice(faces, times) {
    for (let counter = 1; counter <= times; counter++) {
        let dieValue = Math.floor(Math.random() * faces + 1)
        console.log(`Die ${counter} : ${dieValue}`)
    }
}

rollDice(6, 5)

//Let's write a function that takes as parameter a string and the amount of times we want to repeat it.Then, log to the console the result.

function repeat(mystring, times) {
    let result = ''
    for (let counter = 0; counter < times; counter++) {
        result += mystring
    }
    console.log(result)
}

repeat('o', 4)

//Let's write a function that takes a `firstName` and a `lastName` as parameters and presents gives the full name with the lastName being an inital.

function greet(firstName, lastName) {
    console.log(`${firstName} ${lastName.charAt(0)}.`)
}

greet('Yagoubi', 'Rachid')

// make sure inputs are numbers Expected result : 9
function sum(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) return null
    else return a + b
}
const myVariable = sum(3, 6)
console.log(myVariable)

//create new function `isShortWeather` and it should return `true` if the temperature is above or equal to 24 degrees and `false` if it's under.

function isShortWeather(actualTemp) {
    if (actualTemp >= 24) return true
    else return false
}

console.log(isShortWeather(23))
console.log(isShortWeather(26))

// write a function called `lastElement` which accepts a single array argument. The function should return the last element of the array (without removing the element). If the array is empty, the function should return `null`.
function lastElement(myArray) {
    if (!myArray.length) return null
    else return myArray[myArray.length - 1]
}

console.log(lastElement([2, 3, 5]))

//function that capitalize the first letter only

function capitalize(myString) {
    return [...myString][0].toUpperCase() + [...myString].slice(1).join('')
}

console.log(capitalize('Erratum'))

//Write a function called `sumArray` which accepts a single argument: an array of numbers. It should return the sum of all the numbers in the array.

function sumArray(myArray) {
    return myArray.reduce((acc, curr) => acc + curr, 0)
}

console.log(sumArray([4, 5, 3]))

//This function takes in one parameter (a number from 1-7) and returns the day of the week (1 is Monday, 2 is Tuesday, etc.)

function returnDay(numberofDay) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (numberofDay < 1 || numberofDay > 7) return null
    else return daysOfWeek[numberofDay - 1]
}
console.log(returnDay(3))
