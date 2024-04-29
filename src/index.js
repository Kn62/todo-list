import "./styles.css";
import toggleVisibility from "./function/toggleVisibility";

const newForm = document.querySelector('.pop-up-new');
const openForm = document.querySelector(".new-todo");
const closeForm = document.querySelector(".remove-todo");
const newTodoForm = document.querySelector(".new-form-todo");
const chooseTodoForm = document.querySelector(".new-todo-sidebar-form");
const newProjectForm = document.querySelector(".new-form-project");
const chooseProjectForm = document.querySelector(".new-project-sidebar-form");
const newNoteForm = document.querySelector(".new-form-note");
const chooseNoteForm = document.querySelector(".new-note-sidebar-form");

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