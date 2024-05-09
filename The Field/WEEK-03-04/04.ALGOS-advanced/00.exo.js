const fizzbuzz = (num) =>
    [...Array(num).keys()].map((value) => (++value % 3 === 0 && value % 5 === 0 ? 'FizzBuzz' : value % 3 === 0 ? 'Fizz' : value % 5 === 0 ? 'Buzz' : `${value}`)).forEach((result) => console.log(result))

fizzbuzz(20)
