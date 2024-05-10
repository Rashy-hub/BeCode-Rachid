function twoSum(numArray, sum) {
    const seen = new Set()
    return numArray
        .filter((num) => {
            const complement = sum - num
            if (seen.has(complement)) return true
            seen.add(num)
            return false
        })
        .map((num) => [num, sum - num])
}

const numArray = [1, 6, 4, 5, 3, 3]
const targetSum = 7
const result = twoSum(numArray, targetSum)
console.log(result) // ---> [[6,1], [3,4], [3,4]]
