const oddishOrEvenish = (mynumber) =>
    mynumber
        .toString()
        .split('')
        .reduce((acc, curr) => acc + parseInt(curr), 0) % 2
        ? 'Oddish'
        : 'Evenish'

console.log(oddishOrEvenish(43)) //➞ "Oddish"
// 4 + 3 = 7
// 7 % 2 = 1

console.log(oddishOrEvenish(373)) //➞ "Oddish"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

console.log(oddishOrEvenish(4433)) //➞ "Evenish"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
