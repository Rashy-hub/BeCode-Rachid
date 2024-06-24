console.log("app.js main entry point")
AOS.init()
const sections = document.querySelectorAll("section")

sections.forEach((section) => {
    // Generate random RGB values for each section
    const red = Math.floor(Math.random() * 256)
    const green = Math.floor(Math.random() * 256)
    const blue = Math.floor(Math.random() * 256)

    // Create the RGB color string
    const backgroundColor = `rgb(${red}, ${green}, ${blue})`
    section.style.background = backgroundColor
})
