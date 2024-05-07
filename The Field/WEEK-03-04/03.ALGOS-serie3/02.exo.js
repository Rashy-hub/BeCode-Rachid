function reverseOdd(myString) {
    return myString.split(' ').reduce((acc, element) => {
        return element.length % 2 ? acc + ' ' + element.split('').reverse().join('') : acc + ' ' + element
    }, '')
}

console.log(reverseOdd('Bananas')) //➞ "sananaB"

console.log(reverseOdd('One two three four')) //➞ "enO owt eerht four"

console.log(reverseOdd('Make sure uoy only esrever sdrow of ddo length'))
//➞ "Make sure you only reverse words of odd length"
