console.log('Main Script Started')

/* Write some JS in order to :

When Hello is clicked, alert : Oh my God ! You again !!!
When Goodbye is clicked, alert : Thank God ! I thought you'd' never leave ! */

const greetingMessage = 'Oh my God ! You again !!!'
const leavinMessage = "Thank God ! I thought you'd' never leave !"
const unknownMessage = 'This button is unknown'

const buttonsExo1 = document.querySelectorAll('button')

for (const button of buttonsExo1) {
    if (button.innerText === 'Hello') button.addEventListener('click', (e) => alert(greetingMessage))
    else if (button.innerText === 'Goodbye') button.addEventListener('click', (e) => alert(leavinMessage))
}

/* Write some JS code to :

- When a button is clicked
  - the paragraph after it is displayed.
  - the text of the button is no longer "Open tab" but "Close tab"
  - If we click the button again, the paragraph disappears and the text of the button should be back to "Open tab"
 */

const buttonsExo2 = document.querySelectorAll('div button')

for (const button of buttonsExo2) {
    button.addEventListener('click', (e) => {
        button.nextElementSibling.classList.toggle('hidden')
        button.textContent = button.textContent === 'Open tab' ? 'Close tab ' : 'Open tab'
    })
}

/*
Write some JS code in order to :

When we click the button, the body should change its background color to a random color.
The text within the h1 should indicate the rgb numbers of this random color.
Little reminder :

rgb color is given by three numbers between 0 and 255. For example : rgb(26, 254, 56) */

const buttonExo3 = document.querySelector('#generate')
const bodyElement = document.querySelector('body')
buttonExo3.addEventListener('click', (e) => {
    let randomRGB = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(
        Math.random() * 256
    )})`
    bodyElement.style.background = randomRGB
})
