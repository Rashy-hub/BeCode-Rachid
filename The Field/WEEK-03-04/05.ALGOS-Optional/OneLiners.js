const removeDuplicates = (myArray) => [...new Set(myArray)]

console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]))
// Result : [4, 9, 5, 1, 3, 2, 8]

console.log('\n')

console.log(removeDuplicates(['hello', 'world', 'goodbye', 'world']))
// Result : ['hello', 'world', 'goodbye']

console.log(removeDuplicates([true, true, false, true, true, false]))
// Result : [true, false]

console.log('\n')

const capitalize = (myString) => myString.toUpperCase()

console.log(capitalize('belgium'))
// Result : "Belgium"

console.log(capitalize('brazil'))
// Result : "Brazil"

console.log(capitalize('brussels'))
// Result : "Brussels"
console.log('\n')

const dayDif = (dateA, dateB) => Math.round((dateB.getTime() - dateA.getTime()) / (1000 * 3600 * 24))

console.log(dayDif(new Date('2020-10-21'), new Date('2021-10-22')))
// Result : 366

console.log('\n')

const average = (...values) => [...values].reduce((acc, current) => acc + current) / [...values].length

console.log(average(1, 2, 3, 4))

// Result: 2.5

console.log('\n')

const getSmallest = (myArray) => Math.min(...myArray)

const arr = [13, 7, 11, 3, 9, 15, 17]

console.log(getSmallest(arr))

// Result: 3

console.log('\n')

const areEqual = (array1, array2) => array1.every((element) => array2.includes(element))

const arr1 = [1, 2, 3, 4]
const arr2 = [3, 1, 4, 2]
const arr3 = [1, 2, 3]

console.log(areEqual(arr1, arr2))
// Result : true

console.log(areEqual(arr1, arr3))
// Result : false

console.log('\n')

const randomRGB = () => `rgb(${Math.floor(Math.random() * 255 + 1)},${Math.floor(Math.random() * 255 + 1)},${Math.floor(Math.random() * 255 + 1)})`

console.log(randomRGB())
// Result : "rgb(232, 115, 164)"

console.log('\n')

const occurencies = (myString, letter) => (myString.match(new RegExp(letter, 'gi')) || []).length

console.log(occurencies('hello', 'l'))
// Result : 2

console.log(occurencies('abracadabra', 'a'))
// Result : 5

console.log(occurencies('oups', 'z'))
// Result : 0

console.log('\n')

const onlyPositives = (myArray) => myArray.reduce((acc, curr) => (curr > 0 ? acc + curr : acc + 0), 0)

console.log(onlyPositives([1, 6, 2, -3, 5, -12]))
// Result : 14

console.log(onlyPositives([-3, -4, -2]))
// Result : 0

console.log('\n')

const scanAndFind = (arrayObjects, object) => arrayObjects.filter((item) => Object.entries(object).every(([key, value]) => item[key] === value))
console.log(
    scanAndFind(
        [
            {
                firstName: 'Vito',
                lastName: 'Corleone',
            },
            {
                firstName: 'Jon',
                lastName: 'Snow',
            },
            {
                firstName: 'Harry',
                lastName: 'Potter',
            },
            {
                firstName: 'Michal',
                lastName: 'Corleone',
            },
        ],
        {
            lastName: 'Corleone',
        }
    )
)

// Result : [{firstName: Vito, lastName: Corleone}, {firstName: Michael, lastName: Corleone}]

console.log(
    scanAndFind(
        [
            { fullName: 'Roi Baudoin', id: 49762 },
            { fullName: 'Margareth Tatcher', id: 94357 },
            { fullName: 'Barack Obama', id: 76458 },
            { fullName: 'Emmanuel Macron', id: 10687 },
            { fullName: 'Charles de Gaulle', id: 67098 },
            { fullName: 'Boris Johnson', id: 16437 },
        ],
        { id: 10687 }
    )
)
// Result : [{fullName: "Emmanuel Macron", id: 10687}]
