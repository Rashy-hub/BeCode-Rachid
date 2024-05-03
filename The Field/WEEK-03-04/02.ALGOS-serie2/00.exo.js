function countTrue(myArray) {
    return myArray.filter((value) => value).length
}

console.log(countTrue([true, false, false, true, false])) //➞ 2

console.log(countTrue([false, false, false, false])) // ➞ 0

console.log(countTrue([])) //➞ 0
