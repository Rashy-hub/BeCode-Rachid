//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(myArray) {
    return [Math.min(...myArray), Math.max(...myArray)]
}

console.log(minMax([2, 9, 6, 1, 4]))
