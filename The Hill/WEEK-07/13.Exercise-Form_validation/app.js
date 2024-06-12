const myForm = document.forms[0]
myForm.username.focus()

const formFields = ["email", "password", "confirm-password"]
let currentFieldIndex = 0

// auto focus to next element better UX , last enter submit the form

myForm.username.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault()

        // Focus on the next field in the array
        if (currentFieldIndex < formFields.length - 1) {
            const nextFieldInput = myForm.elements[formFields[currentFieldIndex]]
            nextFieldInput.focus()
            currentFieldIndex++
        } else {
            // If it's the last field, submit the form
            myForm.submit()
        }
    }
})

myForm.onsubmit = (event) => {
    event.preventDefault()
    refreshFieldsStyle()
    validateFields()
    console.log("submit event fired")
}

myForm.onreset = (event) => {
    refreshFieldsStyle()
    console.log("reset event fired")
}

function refreshFieldsStyle() {
    const myfields = ["username", "email", "password", "confirmpassword"]
    const mymsg = document.getElementsByClassName("msg")
    for (const field of myfields) {
        myForm.elements[field].classList.remove("success", "error")
    }
    for (const msg of mymsg) {
        msg.classList.remove("show")
    }
}

function validateFields() {
    //username must be only lowercase and at least 5 characters and at most 10 characters.

    let allIsGood = true
    let statusValidation = false

    let regex = /^[a-z]{5,10}$/
    let errorMessage = "Username is invalid. It must be lowercase and between 5-10 characters long."
    statusValidation = validationHandler(regex, myForm.username, errorMessage)
    allIsGood &&= statusValidation

    regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    errorMessage = "Email should be a valid email adress"
    statusValidation = validationHandler(regex, myForm.email, errorMessage)
    allIsGood &&= statusValidation

    regex = /^.{8,15}$/
    errorMessage = "Password should be at least 8 characters and at most 15 characters."
    statusValidation = validationHandler(regex, myForm.password, errorMessage)
    allIsGood &&= statusValidation

    regex = new RegExp(`${myForm.password}`)
    errorMessage = "Password confirmation should be the same as password"
    statusValidation = validationHandler(regex, myForm.confirmpassword, errorMessage)
    allIsGood &&= statusValidation

    // if everything was perfect console log all fields
    console.log(allIsGood)

    if (allIsGood) {
        console.log(`${myForm.username.name} : ${myForm.username.value}`)
        console.log(`${myForm.email.name} : ${myForm.email.value}`)
        console.log(`${myForm.password.name} : ${myForm.password.value}`)
        console.log(`${myForm.confirmpassword.name} : ${myForm.confirmpassword}`)
    }
}

function validationHandler(regex, inputElement, errorMessage) {
    const matchResult = inputElement.value.match(regex)

    if (matchResult) {
        inputElement.classList.toggle("success")
        return true
    } else {
        const msg = inputElement.nextElementSibling
        msg.classList.remove("show")
        msg.classList.add("show")
        msg.innerText = errorMessage
        return false
    }
}
