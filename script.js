// select overlay, add new form button, and popup form input.
const overlay = document.querySelector(".overlay");
const addBtn = document.querySelector(".add-btn");
const overlayBox = document.querySelector(".form-container");

let notes = [];

window.onload = function () {

    // Todo
    todoItems = JSON.parse(localStorage.getItem("todoItems")) || [];
    todoItems.forEach(item => addlist(item));

    // Notes
    notes = JSON.parse(localStorage.getItem("notes")) || [];

    notes.forEach(note => {
        createNote(note);
    });

};

addBtn.addEventListener("click", function () {
    overlay.style.display = "block";
    overlayBox.style.display = "block";

    noteTitle.value = "";
    noteContent.value = "";

    currentNote = null;
    addNoteBtn.innerText = "Add Note";
});

function createNote(note) {

    var div = document.createElement("div");
    div.setAttribute("class", "in-container");

    div.innerHTML = `
        <h2>${note.title}</h2>
        <p>${note.content}</p>

        <div class="note-actions">
            <button onclick="editNote(this)" class="in-edit">Edit</button>
            <button onclick="deleteNote(this)" class="in-delete">Delete</button>
        </div>
    `;

    container.append(div);
    emptyState.style.display = "none";
}

// cancel button
var cancelbtn = document.getElementById("cancel-note");

cancelbtn.addEventListener("click", function () {

    overlay.style.display = "none";
    overlayBox.style.display = "none";

    noteTitle.value = "";
    noteContent.value = "";

    currentNote = null;
    addNoteBtn.innerText = "Add Note";
});

// select inputs
var noteTitle = document.getElementById("note-title");
var noteContent = document.getElementById("note-content");
var addNoteBtn = document.getElementById("add-note");
var container = document.querySelector(".container");
var emptyState = document.querySelector(".empty-state");

// store editing note
var currentNote = null;

// add / update note
addNoteBtn.addEventListener("click", function () {

    if (noteTitle.value === "" || noteContent.value === "") {
        alert("Please fill all fields");
        return;
    }

    if (currentNote != null) {

        // Update
        currentNote.querySelector("h2").innerText = noteTitle.value;
        currentNote.querySelector("p").innerText = noteContent.value;

        currentNote = null;
        addNoteBtn.innerText = "Add Note";
    } else {

    const note = {
        title: noteTitle.value,
        content: noteContent.value
    };

    notes.push(note);

    localStorage.setItem("notes", JSON.stringify(notes));

    createNote(note);

}

noteTitle.value = "";
noteContent.value = "";

overlay.style.display = "none";
overlayBox.style.display = "none";

});

// delete
function deleteNote(button) {

    let noteCard = button.closest(".in-container");

    let title = noteCard.querySelector("h2").innerText;

    let index = notes.findIndex(function(note) {
        return note.title === title;
    });

    if (index > -1) {
        notes.splice(index, 1);
    }

    localStorage.setItem("notes", JSON.stringify(notes));

    noteCard.remove();

    if (document.querySelectorAll(".in-container").length === 0) {
        emptyState.style.display = "flex";
    }

    alert("Note deleted successfully!");
}

// edit
function editNote(button) {

    overlay.style.display = "block";
    overlayBox.style.display = "block";

    currentNote = button.closest(".in-container");

    let title = currentNote.querySelector("h2");
    let para = currentNote.querySelector("p");

    noteTitle.value = title.innerText;
    noteContent.value = para.innerText;

    addNoteBtn.innerText = "Update Note";
}


// todo-list..................................>

let todoInput = document.getElementById("todo-value");
let addbutton = document.getElementById("addtodo");
let input = document.getElementById("input");


let todoItems = [];

addbutton.addEventListener("click", function () {
    
    if (input.value.trim() === "") {
        alert("Please fill all fields");
        return;
    }
    
    todoItems.push(input.value);
    console.log(todoItems);
    addlist(input.value);

    // local storage..........
    localStorage.setItem("todoItems", JSON.stringify(todoItems));  

    input.value = "";
})

function addlist(item) {
    let para = document.createElement("p");
    para.innerText = item;
    todoInput.appendChild(para);

    para.addEventListener("click", function () {

        if (para.style.textDecoration === "line-through") {
            para.style.textDecoration = "none";
        } 
        else {
            para.style.textDecoration = "line-through";
        }

        
    });

    para.addEventListener("dblclick", function () {
        todoInput.removeChild(para);
        remove(item);
    });
    
}

function remove(item) {
    let index = todoItems.indexOf(item);
    
    if (index > -1) {
        todoItems.splice(index, 1);
    }
    localStorage.setItem("todoItems", JSON.stringify(todoItems));
}