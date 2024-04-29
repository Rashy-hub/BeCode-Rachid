const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'] //DON'T TOUCH THIS LINE!
//Change lua into luna
// YOUR CODE BELOW HERE:

console.log(`Before modification ${leaderboard}`)

leaderboard[1] = 'Luna'

console.log(`After modification ${leaderboard}`)

//Create an array that should look like suche : `["one","two","three"]` from this one :
const initialArray = [null, true, ['Apple', 'two', undefined], false, ['three', 'BeCode'], 4, 'I am a big bad wolf', ['one']]
const finalArray = initialArray
    .flat()
    .filter((element) => {
        return element === 'one' || element === 'two' || element === 'three'
    })
    .sort((a, b) => {
        if (a === 'three') return 1
    })
console.log(finalArray)

//At the end of your hard work, planets should look like this: ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn"]

const planets = ['The Moon', 'Venus', 'Earth', 'Mars', 'Jupiter'] //DO NOT TOUCH THIS LINE!

// YOUR CODE GOES BELOW THIS LINE:

let temp = planets.shift()
planets.unshift('Mercury')
planets.push('Saturn')
console.log(planets)
