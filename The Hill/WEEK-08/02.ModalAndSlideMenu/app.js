console.log("app.js main entry point")

const openModalButton = document.getElementById("openButton")
const closeModalButton = document.getElementById("closeButton")
const overlay = document.getElementById("overlay")
const modal = document.getElementById("modal")

openModalButton.addEventListener("click", () => {
    overlay.classList.remove("hidden")
    modal.classList.remove("hidden")
    document.body.style.overflow = "hidden"
})

closeModalButton.addEventListener("click", () => {
    overlay.classList.add("hidden")
    modal.classList.add("hidden")
    document.body.style.overflow = "auto"
})

overlay.addEventListener("click", (event) => {
    if (event.target === overlay) {
        // Check if clicked on overlay
        closeModalButton.click() // Simulate click on close button
    }
})
