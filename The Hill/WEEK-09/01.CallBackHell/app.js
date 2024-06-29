console.log("app.js main entry point")
const mysection = document.getElementById("changingSection")

function changeBackgroundColor(color) {
    mysection.style.backgroundColor = color
    mysection.firstChild.textContent = color
}

changeBackgroundColor("blue") // Initial color

setTimeout(function () {
    changeBackgroundColor("yellow")
    setTimeout(function () {
        changeBackgroundColor("red")
        setTimeout(function () {
            changeBackgroundColor("cyan")
            setTimeout(function () {
                changeBackgroundColor("violet")
                setTimeout(function () {
                    changeBackgroundColor("green")
                    setTimeout(function () {
                        changeBackgroundColor("purple")
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)
