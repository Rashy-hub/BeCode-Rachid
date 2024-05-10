const reverseWords = (text) =>
    text
        .split(' ')
        .map((word) => word.split('').reverse().join(''))
        .join(' ')

console.log(reverseWords('This is a string of words')) //----> "siht si a gnirts fo sdrow"
