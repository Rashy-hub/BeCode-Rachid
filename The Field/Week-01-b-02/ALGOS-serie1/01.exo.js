function calcAge(age) {
    const yearLength = 365
    if (!Number.isInteger(age) || age <= 0) return `${age} is not a correct value , must be a positive integer`
    else return age * yearLength
}

console.log(calcAge(12))
console.log(calcAge('ùed'))
