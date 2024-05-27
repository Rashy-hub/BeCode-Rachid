console.log('starting javascript')
const bold = document.querySelector('b')

// Make the following arrangements with only JavaScript : (each line of code should start with the variable bold... The code will be discusting, but.. hey ! it's an exercise)

// the body should have a background color of beige

bold.closest('body').style.backgroundColor = 'beige'

// the bold itself should be red
bold.style.color = 'red'

// the part-2 div should have a darkblue background and a white color.
bold.closest('.part-2').style.background = 'darkblue'
// The anchor tag in part-2 should be pink
bold.parentElement.nextElementSibling.style.color = 'pink'
// all li in part-1 should be orange
// All a inside the lis should be green
// Finally, the h1 should be uppercase.
