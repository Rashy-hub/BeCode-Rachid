// Example usage

const magazineText1 = 'puerto rico is a great place you must hike far from town to find a secret waterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you'

function ransomNote(noteText, magazineText) {
    const magazineMap = new Map()
    for (const word of magazineText.split(' ')) {
        magazineMap.set(word, (magazineMap.get(word) || 0) + 1)
    }

    for (const word of noteText.split(' ')) {
        if (!magazineMap.has(word) || magazineMap.get(word) === 0) {
            return false
        }
        magazineMap.set(word, magazineMap.get(word) - 1)
    }

    return true
}
const noteText1 = 'this is a secret note to you from a secret admirer'
console.log(ransomNote(noteText1, magazineText1)) //=> false
const noteText2 = 'this is a note to you from a secret admirer'
console.log(ransomNote(noteText2, magazineText1)) // => true
