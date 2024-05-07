function isSmooth(mySentence) {
    const initalValue = [true, mySentence.split(' ')[0]]

    return mySentence.split(' ').reduce((acc, word) => {
        if (word != initalValue[1]) return [acc[0] && word.startsWith(acc[1].charAt(acc[1].length - 1)), word]
        else return [true, word]
    }, initalValue)[0]
}

console.log(isSmooth('Marta appreciated deep perpendicular right trapezoids')) //➞ true
console.log(isSmooth('Someone is outside the doorway')) // ➞ false
console.log(isSmooth('She eats super righteously')) //➞ true
