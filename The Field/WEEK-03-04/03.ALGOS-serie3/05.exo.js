function convert(temp) {
    if (temp.includes('°F')) return Math.round((parseInt(temp) - 32) / 1.8) + '°C'
    else if (temp.includes('°C')) return Math.round(parseInt(temp) * 1.8 + 32) + '°F'
    else return 'Error'
}

//x 1,8 + 32 to convert from C° into F°
console.log(convert('35°C')) //➞ "95°F"

console.log(convert('19°F')) //➞ "-7°C"

console.log(convert('33')) // ➞ "Error"
