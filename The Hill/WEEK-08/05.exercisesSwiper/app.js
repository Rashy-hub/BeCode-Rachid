import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",

    slidesPerView: 1,
    slidesPerGroup: 1,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            const img = document.createElement("img")
            img.src = `./images/${index + 1}.png` // Set image source based on index
            img.alt = `Image ${index + 1} Thumbnail` // Set alt text

            const bullet = document.createElement("span")
            bullet.classList.add(className)
            bullet.appendChild(img)
            console.log(bullet.outerHTML)

            return bullet.outerHTML
        },
    },
})
console.log("swiper enabled")
swiper.enable()
