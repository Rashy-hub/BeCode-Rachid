console.log("app.js main entry point")
const message1 = `Are you sure ? Things are wild down there`
const message2 = `I told you ! `

var waypoint = new Waypoint({
    element: document.getElementById("second-section"),
    handler: function (direction) {
        switch (direction) {
            case "down":
                alert(message1)
                break
            case "up":
                alert(message2)
                break

            default:
                break
        }
    },
    offset: "80%",
})
