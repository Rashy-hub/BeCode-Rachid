function profitableGamble(probability, prize, pay) {
    return probability * prize > pay
}

console.log(profitableGamble(0.2, 50, 9)) //➞ true

console.log(profitableGamble(0.9, 1, 2)) // ➞ false

console.log(profitableGamble(0.9, 3, 2)) //➞ true
