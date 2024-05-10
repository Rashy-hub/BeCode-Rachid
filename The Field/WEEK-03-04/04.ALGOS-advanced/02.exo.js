const isPalindrome = (text) => text.replace(/\W/g, '').toLowerCase() === text.replace(/\W/g, '').toLowerCase().split('').reverse().join('')

console.log(isPalindrome('kayak')) // ---> true
console.log(isPalindrome('race car')) // ---> true
console.log(isPalindrome('hello world')) // ---> false
console.log(isPalindrome("Madam, I'm Adam")) // ---> true
