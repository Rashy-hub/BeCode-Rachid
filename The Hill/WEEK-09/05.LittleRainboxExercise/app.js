console.log("app.js main entry point")

const mySection = document.getElementById("changingSection")

function changeBackgroundColor(color) {
    mySection.style.backgroundColor = color
    mySection.firstChild.textContent = color
    return Promise.resolve()
}

function changeColorSequence() {
    const colors = ["blue", "yellow", "red", "cyan", "violet", "green", "purple"]

    return colors.reduce((previousPromise, color) => {
        return previousPromise.then(() => {
            return new Promise((resolve) =>
                setTimeout(() => {
                    changeBackgroundColor(color)
                    resolve()
                }, 1000)
            )
        })
    }, Promise.resolve())
}

changeColorSequence()
    .then(() => console.log("All colors displayed successfully!"))
    .catch((error) => console.error("An error occurred:", error))
