// const displayToDo = (array) => {
//     const globalContainer = document.querySelector(".global-container")
//     const toDoContainer = document.createElement("div");

//     while (toDoContainer.firstChild) {
//         toDoContainer.removeChild(toDoContainer.firstChild);
//     }

//     array.forEach((todo, index) => {
//         const newTodoTitle = document.createElement("h1");
//         newTodoTitle.innerText = `${todo.title}`;
//         toDoContainer.appendChild(newTodoTitle);

//         const newTodoObject = document.createElement("p");
//         newTodoObject.innerText = `${todo.object}`;
//         toDoContainer.appendChild(newTodoObject);

//         const newTodoDate = document.createElement("p");
//         newTodoDate.innerText = `${todo.date}`;
//         toDoContainer.appendChild(newTodoDate);

//         const newTodoDone = document.createElement("button");
//         newTodoDone.setAttribute("type", "checkbox");
//         newTodoDone.addEventListener("click", () => {
//             todo.toggleDone;
//             toDoContainer.classList.toggle("done");
//         })
//         toDoContainer.appendChild(newTodoDone);

//         const deleteButton = document.createElement("button");
//         deleteButton.classList.add("delete-button");
//         deleteButton.innerText = "X";
//         deleteButton.addEventListener("click", () => {
//             array.splice(index, 1);
//             displayToDo();
//         })
//         toDoContainer.appendChild(deleteButton);

//         globalContainer.appendChild(toDoContainer);
//     })
// }

// export default displayToDo;