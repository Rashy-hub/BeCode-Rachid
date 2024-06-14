console.log("app.js entry point")

let todos = []

const todoForm = document.querySelector(".ux_container") // Select form using class name
const todoInput = document.getElementById("todoInput") // Select input by id
const todoList = document.querySelector(".todos_container") // Select todo list container

loadLocalStorage()
//main event listener
todoForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const task = todoInput.value
    if (task) {
        addTask(task)
        todoInput.value = ""
    }
})

function addTask(task) {
    todos.push(task)

    saveToLocalStorage(task)
    displayTodos()
}

function saveToLocalStorage() {
    localStorage.clear()
    localStorage.setItem("todos", JSON.stringify(todos))
}
function loadLocalStorage() {
    const storedData = localStorage.getItem("todos")
    if (!storedData) return
    let parsedData = JSON.parse(storedData)
    todos = [...parsedData]
    displayTodos()
}

function displayTodos() {
    todoList.innerHTML = ""
    todos.forEach((task) => {
        const todoItem = document.createElement("div")
        todoItem.classList.add("todoItem")
        const todoTitle = document.createElement("p")
        todoTitle.innerText = task
        const todoDeleteButton = document.createElement("button")
        todoDeleteButton.innerText = "Delete"
        todoDeleteButton.addEventListener("click", deleteButtonHandler)
        todoItem.appendChild(todoTitle)
        todoItem.appendChild(todoDeleteButton)
        todoList.appendChild(todoItem)

        console.log(todoList.appendChild(todoItem))
    })
}

function deleteButtonHandler(event) {
    const parentItem = event.target.closest("div")
    const todoTitle = event.target.previousSibling
    todos = [...todos.filter((task) => task !== todoTitle.textContent)]
    saveToLocalStorage()
    displayTodos()
}
