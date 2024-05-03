function caesarCipher(mystring, num) {
    let alphabetArray = [...Array(26)].map(() => String.fromCharCode(i++), (i = 97))

    return mystring
        .toLowerCase()
        .split('')
        .reduce((acc, curr) => {
            let newLetterIndex = alphabetArray.indexOf(curr) + num
            if (curr === ' ') return acc + ' '

            if (newLetterIndex > alphabetArray.length) {
                newLetterIndex -= 26
            } else if (newLetterIndex < 0) {
                newLetterIndex += 26
            }

            return acc + alphabetArray.join('').charAt(newLetterIndex)
        }, '')

    //return [...Array(26)].reduce((a) => a + String.fromCharCode(i++), '', (i = 97))
}

console.log(caesarCipher('zoo keeper', 2)) //----> "bqq mggrgt"

console.log(caesarCipher('bqq mggrgt', -2)) //----> "zoo keeper"

console.log(caesarCipher('My name is Henrique', 3)) //----> "pb qdph lv khqultxh "

console.log(caesarCipher('pb qdph lv khqultxh ', -3))
