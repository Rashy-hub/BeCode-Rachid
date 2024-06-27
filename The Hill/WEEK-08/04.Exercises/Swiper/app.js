import Swiper from "https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs"
const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    slidesPerView: 3.5,
    spaceBetween: 50,
    slidesPerGroup: 1,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
})

for (let index = 0; index < 9; index++) {
    const slide = `<div class="swiper-slide"><img src="./images/${index + 1}.jpg" ></div>`
    if (index < 4) swiper.removeSlide(0)
    swiper.appendSlide(slide)
    swiper.update()
}
swiper.enable()
