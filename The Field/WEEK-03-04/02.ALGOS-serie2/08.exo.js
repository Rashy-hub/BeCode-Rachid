function areaOfCountry(country, superficy) {
    const totalLandMass = 148940000
    let result = `${country} is ${((superficy / totalLandMass) * 100).toFixed(2)}%`
    return result
}

console.log(areaOfCountry('Russia', 17098242)) //➞ "Russia is 11.48% of the total world's landmass"

console.log(areaOfCountry('USA', 9372610)) // ➞"USA is 6.29% of the total world's landmass"

console.log(areaOfCountry('Iran', 1648195)) //➞ "Iran is 1.11% of the total world's landmass"
