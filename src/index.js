import "./styles.css";
import toggleVisibility from "./function/toggleVisibility";
// import displayToDo from "./function/displayToDo";

class newTodo {
    constructor(title, object, date) {
        this.title = title;
        this.object = object;
        this.date = date;
        this.done = false
    }

    get toggleDone() {
        this.done = !this.done
    }
};

const newForm = document.querySelector('.pop-up-new');
const openForm = document.querySelector(".new-todo");
const closeForm = document.querySelector(".remove-todo");
const newTodoForm = document.querySelector(".new-form-todo");
const chooseTodoForm = document.querySelector(".new-todo-sidebar-form");
const newProjectForm = document.querySelector(".new-form-project");
const chooseProjectForm = document.querySelector(".new-project-sidebar-form");
const newNoteForm = document.querySelector(".new-form-note");
const chooseNoteForm = document.querySelector(".new-note-sidebar-form");
const submitToDo = document.querySelector(".new-todo-submit");
const submitProject = document.querySelector(".new-project-submit");
const submitNote = document.querySelector(".new-note-submit");

let toDoArray = [];

const displayToDo = () => {
    const globalContainer = document.querySelector(".global-container")
    const toDoContainer = document.createElement("div");

    while (globalContainer.firstChild) {
        globalContainer.removeChild(globalContainer.firstChild);
    }

    toDoArray.forEach((todo, index) => {
        const newTodoTitle = document.createElement("h1");
        newTodoTitle.innerText = `${todo.title}`;
        toDoContainer.appendChild(newTodoTitle);

        const newTodoObject = document.createElement("p");
        newTodoObject.innerText = `${todo.object}`;
        toDoContainer.appendChild(newTodoObject);

        const newTodoDate = document.createElement("p");
        newTodoDate.innerText = `${todo.date}`;
        toDoContainer.appendChild(newTodoDate);

        const newTodoDone = document.createElement("button");
        newTodoDone.setAttribute("type", "checkbox");
        newTodoDone.addEventListener("click", () => {
            todo.toggleDone;
            toDoContainer.classList.toggle("done");
        })
        toDoContainer.appendChild(newTodoDone);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {
            console.log(toDoArray);
            toDoArray.splice(index, 1);
            console.log(toDoArray);
            displayToDo();
        })
        toDoContainer.appendChild(deleteButton);

        globalContainer.appendChild(toDoContainer);
    })
}

openForm.addEventListener("click", () => {
    toggleVisibility(newForm);
    toggleVisibility(newTodoForm);
    if (chooseTodoForm.classList.contains("active")) {
    } else {
        chooseTodoForm.classList.toggle("active")
    }
})

closeForm.addEventListener("click", () => {
    toggleVisibility(newForm);
    if (newProjectForm.classList.contains("open")) {
        toggleVisibility(newProjectForm)
        chooseProjectForm.classList.toggle("active")
    }
    if (newNoteForm.classList.contains("open")) {
        toggleVisibility(newNoteForm)
        chooseNoteForm.classList.toggle("active")
    }
    if (newTodoForm.classList.contains("open")) {
        toggleVisibility(newTodoForm);
    } 
})

chooseTodoForm.addEventListener("click", () => {
    if (newProjectForm.classList.contains("open")) {
        toggleVisibility(newProjectForm)
        chooseProjectForm.classList.toggle("active")
    }
    if (newNoteForm.classList.contains("open")) {
        toggleVisibility(newNoteForm)
        chooseNoteForm.classList.toggle("active")
    }
    if (newTodoForm.classList.contains("open")) {
    } else {
        toggleVisibility(newTodoForm);
        chooseTodoForm.classList.toggle("active")
    } 
})

chooseProjectForm.addEventListener("click", () => {
    if (newTodoForm.classList.contains("open")) {
        toggleVisibility(newTodoForm)
        chooseTodoForm.classList.toggle("active")
    }
    if (newNoteForm.classList.contains("open")) {
        toggleVisibility(newNoteForm)
        chooseNoteForm.classList.toggle("active")

    }
    if (newProjectForm.classList.contains("open")) {
    } else {
        toggleVisibility(newProjectForm);
        chooseProjectForm.classList.toggle("active")
    }   
})

chooseNoteForm.addEventListener("click", () => {
    if (newTodoForm.classList.contains("open")) {
        toggleVisibility(newTodoForm)
        chooseTodoForm.classList.toggle("active")
    }
    if (newProjectForm.classList.contains("open")) {
        toggleVisibility(newProjectForm)
        chooseProjectForm.classList.toggle("active")

    }
    if (newNoteForm.classList.contains("open")) {
    } else {
        toggleVisibility(newNoteForm);
        chooseNoteForm.classList.toggle("active")
    }
})

submitToDo.addEventListener("click", (event) => {
    event.preventDefault();

    const titleInputToDo = document.querySelector("#new-todo-title").value;
    const objectInputToDo = document.querySelector("#new-todo-object").value;
    const dateInputToDo = document.querySelector("#new-todo-date").value;

    const toDo = new newTodo (titleInputToDo, objectInputToDo, dateInputToDo);

    toDoArray.push(toDo);
    displayToDo();

    document.querySelector("#new-todo-title").value = ""
    document.querySelector("#new-todo-object").value = ""
    document.querySelector("#new-todo-date").value = ""

    toggleVisibility(newForm);
    if (newProjectForm.classList.contains("open")) {
        toggleVisibility(newProjectForm)
        chooseProjectForm.classList.toggle("active")
    }
    if (newNoteForm.classList.contains("open")) {
        toggleVisibility(newNoteForm)
        chooseNoteForm.classList.toggle("active")
    }
    if (newTodoForm.classList.contains("open")) {
        toggleVisibility(newTodoForm);
    }

})

