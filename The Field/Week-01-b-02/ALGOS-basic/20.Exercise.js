let todos = []
let userInput = prompt("Enter your command 'new'|'list'|'delete'|'quit'")
mainloop: while (userInput != 'quit') {
    switch (userInput) {
        case 'new':
            let todo = prompt('Enter todo name please').toString()
            todos.push(todo)

            break
        case 'list':
            alert(`********* TODO LIST *********\n${todos.forEach((element, index) => `${index + 1}.${element}`)}`)

            break
        case 'delete':
            todos = todos.splice(prompt('At what position you want to delete todo ?'), 1)
            break
        case 'quit':
            break mainloop

        default:
            userInput = prompt("Command not correct => 'new'|'list'|'delete'|'quit'")
            break
    }
    userInput = prompt("Enter your command 'new'|'list'|'delete'|'quit'")
}
