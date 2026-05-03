// select overlay, add new form button, and popup form input.
var overlay = document.querySelector(".overlay");
var addBtn = document.querySelector(".add-btn");
var overlayBox = document.querySelector(".form-container");

addBtn.addEventListener("click", function () {
  overlay.style.display = "block";
  overlayBox.style.display = "block";
});

var cancelbtn = document.getElementById("cancel-note");
cancelbtn.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.style.display = "none";
  overlayBox.style.display = "none";
  noteTitle.value = "";
  noteContent.value = "";
});

// select inputs note-title, note-content, add-note ,overall container
var noteTitle = document.getElementById("note-title");
var noteContent = document.getElementById("note-content");
var addNoteBtn = document.getElementById("add-note");
var container = document.querySelector(".container");
var emptyState = document.querySelector(".empty-state");

addNoteBtn.addEventListener("click", function (event) {
  event.preventDefault();
  emptyState.style.display = "none";
  overlay.style.display = "none";
  overlayBox.style.display = "none";
  var div = document.createElement("div");
  div.setAttribute("class", "in-container");
  div.innerHTML = `<h2>${noteTitle.value}</h2><p>${noteContent.value}</p><button onclick="deleteNote(this)" class="in-delete">Delete</button>`;
  container.append(div);
  noteTitle.value = "";
  noteContent.value = "";
});

// delete the note
function deleteNote(button) {
  button.parentElement.remove();
  alert("Note deleted successfully!");
}
