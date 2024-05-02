import "./styles.css";
import toggleVisibility from "./function/toggleVisibility";

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

class newProject {
    constructor(title) {
        this.title = title;
        this.done = false
    }

    get toggleDone() {
        this.done = !this.done
    }
}

class newNote {
    constructor(title, object) {
        this.title = title;
        this.object = object;
        this.done = false; 
    }

    get toggleDone() {
        this.done = !this.done
    }
}

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
const toDoContainer = document.querySelector(".todos-container");
const toDoCount = document.querySelector("#todo-count");
const globalContainer = document.querySelector(".global-container");
const projectContainer = document.querySelector(".project-container");
const projectCount = document.querySelector("#project-count");
const noteContainer = document.querySelector(".note-container");
const noteCount = document.querySelector("#note-count");
const showToDo = document.querySelector("#display-todo");
const showProject = document.querySelector("#display-project");
const showNote = document.querySelector("#display-note");
const showHome = document.querySelector("#display-home");

let toDoArray = [];
let projectArray = [];
let noteArray = [];

const displayToDo = () => {

    toDoCount.innerText = 0

    while (toDoContainer.firstChild) {
        toDoContainer.removeChild(toDoContainer.firstChild);
    }

    toDoArray.forEach((todo, index) => {
        const todoInfo = document.createElement("div"); 

        const newTodoTitle = document.createElement("h3");
        newTodoTitle.innerText = `${todo.title}`;
        todoInfo.appendChild(newTodoTitle);

        const newTodoObject = document.createElement("p");
        newTodoObject.innerText = `| ${todo.object}`;
        todoInfo.appendChild(newTodoObject);

        const newTodoDate = document.createElement("p");
        newTodoDate.innerText = `| ${todo.date}`;
        todoInfo.appendChild(newTodoDate);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container")

        const newTodoDone = document.createElement("button");
        newTodoDone.classList.add("checkbox");
        newTodoDone.innerText = "Done";
        newTodoDone.addEventListener("click", () => {
            todo.toggleDone;
            todoInfo.classList.toggle("done");

        })
        buttonContainer.appendChild(newTodoDone);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {
            toDoArray.splice(index, 1);
            displayToDo();
        })

        if (todo.done) {
            todoInfo.classList.add("done")
        }

        toDoCount.innerText = parseInt(toDoCount.innerText) + 1;

        buttonContainer.appendChild(deleteButton);
        todoInfo.appendChild(buttonContainer);
        toDoContainer.appendChild(todoInfo);
    })
}

const displayProject = () => {

    projectCount.innerText = 0;

    while (projectContainer.firstChild) {
        projectContainer.removeChild(projectContainer.firstChild);
    }

    projectArray.forEach((project, index) => {
        const projectInfo = document.createElement("div");

        const projectTitle = document.createElement("h2");
        projectTitle.innerText = `${project.title}`;
        projectInfo.appendChild(projectTitle);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container")

        const newProjectDone = document.createElement("button");
        newProjectDone.classList.add("checkbox");
        newProjectDone.innerText = "Done";
        newProjectDone.addEventListener("click", () => {
            project.toggleDone;
            projectInfo.classList.toggle("done");
        })
        buttonContainer.appendChild(newProjectDone);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {

            projectArray.splice(index, 1);
            displayProject();
        })
        buttonContainer.appendChild(deleteButton);

        if (project.done) {
            projectInfo.classList.add("done")
        }

        projectCount.innerText = parseInt(projectCount.innerText) + 1;
        projectInfo.appendChild(buttonContainer);
        projectContainer.appendChild(projectInfo);
    })

}

const displayNote = () => {
    noteCount.innerText = 0;

    while (noteContainer.firstChild) {
        noteContainer.removeChild(noteContainer.firstChild);
    }

    noteArray.forEach((note, index) => {
        const noteInfo = document.createElement("div");
        
        const noteTitle = document.createElement("h2");
        noteTitle.innerText = `${note.title}`;
        noteInfo.appendChild(noteTitle);

        const noteObject = document.createElement("p");
        noteObject.innerText = `${note.object}`;
        noteInfo.appendChild(noteObject);

        const buttonContainer = document.createElement("div");
        buttonContainer.classList.add("button-container")

        const newNoteDone = document.createElement("button");
        newNoteDone.classList.add("checkbox");
        newNoteDone.innerText = "Done";
        newNoteDone.addEventListener("click", () => {
            note.toggleDone;
            noteInfo.classList.toggle("done");
        })
        buttonContainer.appendChild(newNoteDone);

        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-button");
        deleteButton.innerText = "X";
        deleteButton.addEventListener("click", () => {

            noteArray.splice(index, 1);
            displayNote();
        })
        buttonContainer.appendChild(deleteButton);

        if (note.done) {
            noteInfo.classList.add("done")
        }

        noteCount.innerText = parseInt(noteCount.innerText) + 1;
        noteInfo.appendChild(buttonContainer);
        noteContainer.appendChild(noteInfo);
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

});

submitProject.addEventListener("click", (event) => {
    event.preventDefault();

    const titleInputProject = document.querySelector("#new-project-title").value;

    const project = new newProject(titleInputProject)

    projectArray.push(project);
    displayProject();

    document.querySelector("#new-project-title").value = ""

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

submitNote.addEventListener("click", (event) => {
    event.preventDefault();

    const titleInputNote = document.querySelector("#new-note-title").value;
    const objectInputNote = document.querySelector("#new-note-object").value;
    
    const note = new newNote(titleInputNote, objectInputNote);

    noteArray.push(note);
    displayNote();

    document.querySelector("#new-note-title").value = ""
    document.querySelector("#new-note-object").value = ""

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

showToDo.addEventListener("click", (event) => {
    event.preventDefault();

    showToDo.classList.toggle("active");
    showProject.classList.remove("active");
    showNote.classList.remove("active");
    showHome.classList.remove("active");

    while (globalContainer.firstChild) {
        globalContainer.removeChild(globalContainer.firstChild)
    }

    globalContainer.appendChild(toDoContainer); 
    displayToDo();
})

showProject.addEventListener("click", (event) => {
    event.preventDefault();

    showProject.classList.toggle("active");
    showNote.classList.remove("active");
    showToDo.classList.remove("active");
    showHome.classList.remove("active");
    
    while (globalContainer.firstChild) {
        globalContainer.removeChild(globalContainer.firstChild)
    }

    globalContainer.appendChild(projectContainer); 
    displayProject();
})

showNote.addEventListener("click", (event) => {
    event.preventDefault();

    showNote.classList.toggle("active");
    showProject.classList.remove("active");
    showToDo.classList.remove("active");
    showHome.classList.remove("active");
    
    while (globalContainer.firstChild) {
        globalContainer.removeChild(globalContainer.firstChild)
    }

    globalContainer.appendChild(noteContainer); 
    displayNote();
} )

showHome.addEventListener("click", (event) => {
    event.preventDefault(); 

    showNote.classList.remove("active");
    showProject.classList.remove("active");
    showToDo.classList.remove("active");
    showHome.classList.toggle("active");

    while (globalContainer.firstChild) {
        globalContainer.removeChild(globalContainer.firstChild)
    }

    globalContainer.appendChild(toDoContainer);
    globalContainer.appendChild(projectContainer); 
    globalContainer.appendChild(noteContainer);

    displayToDo();
    displayProject();
    displayNote();
})