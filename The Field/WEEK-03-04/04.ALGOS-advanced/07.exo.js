const memo = new Map()
function fibonacci(num) {
    function fibonacciResursiv(n) {
        if (memo.has(n)) {
            return memo.get(n)
        }
        if (n <= 1) {
            return n
        }
        const result = fibonacciResursiv(n - 1) + fibonacciResursiv(n - 2)
        memo.set(n, result)
        return result
    }

    const result = []
    for (let i = 1; i <= num; i++) {
        result.push(fibonacciResursiv(i))
    }
    return result
}

console.log(fibonacci(4)) //----> [1, 1, 2, 3]
console.log(fibonacci(9)) //----> [1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(6)) //----> [1, 1, 2, 3, 5, 8]
console.log(memo)
