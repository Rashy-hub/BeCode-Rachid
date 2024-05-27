console.log('Script start')

const mainHeading = document.getElementById('main-heading')

mainHeading.style.color = 'black'

const list = document.querySelector('ul')

//Check what is the innerText of the first li.list-item and assign it to a variable.

const firstListItem = document.querySelector('li.list-item')
console.log(firstListItem)

// Create another li element.

const anotherListItem = document.createElement('li')

// Set the inner text of this last li to be equal to the first li.

anotherListItem.innerText = firstListItem.innerHTML

console.log(anotherListItem)
// Append the new li tag to the list.

list.appendChild(anotherListItem)
// Now, give all the li the color purple
const allListElements = document.querySelectorAll('li')

for (const element of allListElements) {
    element.style.color = 'purple'
}

// Then, give the last li the color gold

allListElements[allListElements.length - 1].style.color = 'gold'

// Now, make sure the word Hall from Annie Hall is red

const stringToChange = 'Annie Hall'

for (const element of allListElements) {
    if (element.innerText.includes(stringToChange)) {
        element.innerHTML = 'Annie <span>Hall</span>'
    }
}

document.querySelector('li>span').setAttribute('style', 'color:red;')
