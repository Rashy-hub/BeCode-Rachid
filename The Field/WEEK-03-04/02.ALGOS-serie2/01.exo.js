function possibleBonus(initialPosition, friendPosition) {
    return friendPosition - 6 <= initialPosition && !friendPosition < initialPosition
}

console.log(possibleBonus(3, 7)) //➞ true

console.log(possibleBonus(1, 9)) //➞ false

console.log(possibleBonus(5, 3)) //➞ false
