function loadTodos(){
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then(r => r.json())
    .then(data => displayTodos(data))
}

function displayTodos(todos){
    const todoContainer = document.getElementById("todo-container");
    for (const todo of todos) {
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("my-8")
        todoDiv.innerHTML = `
        <p class="text-2xl">Id: ${todo.id}</p>
        <p class="text-2xl">User Id: ${todo.userId}</p>
        <h3 class="text-2xl">Title: ${todo.title}</h3>
        <p class="text-2xl">${todo.completed === true ? "Completed": "Not Completed"}</p>
        `;
        todoContainer.appendChild(todoDiv);
    }
}
loadTodos();