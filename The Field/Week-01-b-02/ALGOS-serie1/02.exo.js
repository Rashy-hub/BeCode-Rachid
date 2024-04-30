function addUp(mynumber) {
    let result = 0
    for (let counter = 1; counter <= mynumber; counter++) {
        result += counter
    }
    return result
}

console.log(addUp(4))
console.log(addUp(13))
console.log(addUp(600))
