function calculateFuel(distance) {
    if (Number.isNaN(distance) || distance < 0) return `${distance} is not a correct value , must be a positive number`
    let amountOfFuel = distance * 10
    if (amountOfFuel <= 100) return 100
    else return amountOfFuel
}

console.log(calculateFuel(15)) // ➞ 150

console.log(calculateFuel(23.5)) // ➞ 235

console.log(calculateFuel(3)) //➞ 100
