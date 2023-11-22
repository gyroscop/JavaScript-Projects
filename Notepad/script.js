let createBtn = document.querySelector(".btn");
let notesContainer = document.querySelector(".notes-container");
let inbox = document.querySelectorAll(".input-box");

createBtn.addEventListener("click", () => {
  let inputbox = document.createElement("p");
  let deleteImg = document.createElement("img");
  inputbox.setAttribute("contenteditable", "true");
  inputbox.className = "input-box";
  deleteImg.src = "images/delete.png";
  notesContainer.appendChild(inputbox).appendChild(deleteImg);

  //   updateStorage();
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if ((e.target.tagName = "P")) {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((element) => {
      element.onkeyup = function () {
        updateStorage();
      };
    });
  }
});

// enter key handling

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
});

//  Prevent the deletion if the target is an image

inbox.addEventListener("beforeinput", (event) => {
  if (
    event.inputType === "deleteContentBackward" ||
    event.inputType === "deleteContentForward"
  ) {
    var selection = window.getSelection();
    var range = selection.getRangeAt(0);
    var node = range.startContainer;

    if (node.nodeName === "IMG") {
      event.preventDefault();
    }
  }
});

// add data to local storage

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

showNotes();
// localStorage.clear();
