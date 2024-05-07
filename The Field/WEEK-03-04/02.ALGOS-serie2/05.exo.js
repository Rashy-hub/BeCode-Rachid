function removeLeadingTrailing(myString) {
    return parseFloat(myString)
}

console.log(removeLeadingTrailing('230.000')) //➞ "230"

console.log(removeLeadingTrailing('00402')) // ➞ "402"

console.log(removeLeadingTrailing('03.1400')) // ➞ "3.14"

console.log(removeLeadingTrailing('30')) //➞ "30"
