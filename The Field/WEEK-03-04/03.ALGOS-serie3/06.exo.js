function findBrokenKeys(correct, wrong) {
    const regex = new RegExp(`(?<!^)([${correct}])|(?!^)[^${wrong}]`, 'g')
    const matches = correct.replace(regex, '$1').split('')

    return [...new Set(matches.filter((char, idx) => char !== wrong[idx]))]
}

console.log(findBrokenKeys('happy birthday', 'hawwy birthday')) //➞ ["p"]

console.log(findBrokenKeys('starry night', 'starrq light')) //➞ ["y", "n"]

console.log(findBrokenKeys('beethoven', 'affthoif5')) //➞ ["b", "e", "v", "n"]
