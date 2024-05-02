function detectWord(hiddenword) {
    let arrayString = hiddenword.split('')
    return arrayString
        .filter((letter) => {
            return letter == letter.toLowerCase()
        })
        .join('')
}

console.log(detectWord('UcUNFYGaFYFYGtNUH')) //➞ "cat"

console.log(detectWord('bEEFGBuFBRrHgUHlNFYaYr')) // ➞ "burglar"

console.log(detectWord('YFemHUFBbezFBYzFBYLleGBYEFGBMENTment')) //➞ "embezzlement"
