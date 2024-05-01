//Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

function minMax(myArray) {
    return [Math.min(...myArray), Math.max(...myArray)]
}
console.log(minMax([1, 2, 3, 4, 5])) //➞ [1, 5]
