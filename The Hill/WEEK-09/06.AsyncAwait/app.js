console.log("app.js main entry point")

const mySection = document.getElementById("changingSection")

function generateBG(color, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            mySection.style.backgroundColor = color
            mySection.firstChild.textContent = color
            resolve()
        }, delay)
    })
}

async function changeBGcolor() {
    const colors = ["blue", "yellow", "red", "cyan", "violet", "green", "purple"]
    const delay = 1000

    try {
        for (const color of colors) {
            await generateBG(color, delay)
        }
        console.log("All colors displayed successfully!")
    } catch (error) {
        console.error("An error occurred:", error)
    }
}

changeBGcolor()
