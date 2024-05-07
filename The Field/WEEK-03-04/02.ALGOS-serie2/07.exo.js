function calculator(num1, operator, num2) {
    let result = `${num1} ${operator} ${num2} = `
    let calculation = 0
    switch (operator) {
        case '+':
            calculation = num1 + num2
            result += calculation
            break
        case '-':
            calculation = num1 - num2
            result += calculation
            break
        case '*':
            calculation = num1 * num2
            result += calculation
            break
        case '/':
            calculation = num1 / num2
            result = num2 === 0 ? 'Cannot divide by zero' : result + calculation
            break

        default:
            result = 'Cannot perform calculation'
            break
    }

    return result
}

console.log(calculator(2, '+', 2)) // ➞ 4

console.log(calculator(2, '*', 2)) //➞ 4

console.log(calculator(4, '/', 2)) //➞ 2

console.log(calculator(4, '/', 0)) //➞ 2
