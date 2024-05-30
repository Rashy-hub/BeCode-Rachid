const userName = document.getElementById("username")
userName.focus()
const inputHandler = (event) => {
    if (event.target.id === "username") {
        const regex = /^[a-z]{5,10}$/
        if (!regex.test(event.target.value)) console.log("username field is not correct")
    }
}

userName.addEventListener("change", inputHandler)
