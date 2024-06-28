console.log("App.js main entry point")
const imageGrid = document.querySelectorAll(".image-grid img")
let lightbox = new FsLightbox()

const lightBoxHandler = function (event, index) {
    console.log(`event ${event.target} at index ${index}`)
    lightbox.open(index)
}

const links = []
for (let index = 0; index < 9; index++) {
    imageGrid[index].setAttribute("src", `./images/${index + 1}.jpg`)
    imageGrid[index].addEventListener("click", (event) => lightBoxHandler(event, index))
    links.push(`./images/${index + 1}.jpg`)
}

lightbox.props.sources = links
//lightbox.open()
