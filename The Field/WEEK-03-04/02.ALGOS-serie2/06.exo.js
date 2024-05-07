function sortIt(myArrayToSort) {
    return myArrayToSort.sort((a, b) => a - b)
}

console.log(sortIt([4, 1, 3])) //➞ [1, 3, 4]

console.log(sortIt([[4], [1], [3]])) //➞ [[1], [3], [4]]

console.log(sortIt([4, [1], 3])) //➞ [[1], 3, 4]

console.log(sortIt([[4], 1, [3]])) //➞ [1, [3], [4]]

console.log(sortIt([[3], 4, [2], [5], 1, 6])) //➞ [1, [2], [3], 4, [5], 6]
