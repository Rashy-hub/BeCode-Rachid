const isSmooth = (mySentence) =>
    mySentence.split(' ').reduce((acc, word) => (word != mySentence.split(' ')[0] ? [acc[0] && word.startsWith(acc[1].charAt(acc[1].length - 1)), word] : [true, word]), [true, mySentence.split(' ')[0]])[0]

console.log(isSmooth('Marta appreciated deep perpendicular right trapezoids')) //➞ true
console.log(isSmooth('Someone is outside the doorway')) // ➞ false
console.log(isSmooth('She eats super righteously')) //➞ true
