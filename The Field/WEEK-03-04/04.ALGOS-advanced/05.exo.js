function reverseArray(myArray) {
    let lefsideIndex = 0
    let rightsideIndex = myArray.length - 1

    while (lefsideIndex < rightsideIndex) {
        ;[myArray[lefsideIndex], myArray[rightsideIndex]] = [myArray[rightsideIndex], myArray[lefsideIndex]]
        lefsideIndex++
        rightsideIndex--
    }

    return myArray
}

const myArray = [1, 2, 3, 4, 5]
reverseArray(myArray)
console.log(myArray) // => [5, 4, 3, 2, 1]
