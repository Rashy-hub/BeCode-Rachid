console.log('starting javascript')
//article Exo 1
const bold = document.querySelector('b')

// Make the following arrangements with only JavaScript : (each line of code should start with the variable bold... The code will be discusting, but.. hey ! it's an exercise)

// the body should have a background color of beige

bold.closest('body').style.backgroundColor = 'beige'

// the bold itself should be red
bold.style.color = 'red'

// the part-2 div should have a darkblue background and a white color.
bold.closest('.part-2').style.background = 'darkblue'
bold.closest('.part-2').style.color = 'white'

// The anchor tag in part-2 should be pink
bold.parentElement.nextElementSibling.style.color = 'pink'
// all li in part-1 should be orange

bold.closest('.part-2')
    .previousElementSibling.querySelectorAll('li')
    .forEach((element) => (element.style.color = 'orange'))

// All a inside the lis should be green
bold.closest('.part-2')
    .previousElementSibling.querySelectorAll('li')
    .forEach((element) => (element.querySelector('a').style.color = 'green'))

// Finally, the h1 should be uppercase.

bold.closest('.part-2').previousElementSibling.querySelector('h1').style.textTransform = 'uppercase'

/* article Exo2 : 

Use JavaScript to generate exactly 100 buttons and append it to the container div.
Inside each button there has to be a text "I am button 1", 2, 3, 4 etc.
Also, change the h1 text to There are a lot of buttons here !
Lastly... make the buttons appear and the text changes only after 2 seconds (we saw setTimeOut() already) */

const myContainer = document.querySelector('.container')
const myTitle = document.querySelector('.exo2>h1')
myTitle.innerText = 'There are a lot of buttons here !'

for (let index = 0; index < 100; index++) {
    let button = document.createElement('button')
    button.innerText = `I am button ${index + 1}`
    button.style.display = 'none'
    myContainer.appendChild(button)
    setTimeout(() => {
        button.style.display = 'block'
    }, 2000)
}

/* article Exo3 :

    Use javascript to inverse the highlighted list elements.

*/

const myListItems = document.querySelectorAll('.exo3>ul li')
myListItems.forEach((item) => item.classList.toggle('highlight'))

/* article Exo4
    Create an image tag for each Pokemon and append it to the container
 */
const myPokeContainer = document.querySelector('.exo4 .container')
const baseUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
for (let index = 1; index < 151; index++) {
    const pokemonUrl = baseUrl + `${index}.png`
    let imagePokemon = document.createElement('img')
    imagePokemon.setAttribute('src', pokemonUrl)
    imagePokemon.width = 200
    imagePokemon.height = 200
    myPokeContainer.appendChild(imagePokemon)
}
