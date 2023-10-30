let button = document.querySelector("button");
let list = document.querySelector("ul");
let inputBox = document.getElementById("input-box");

button.addEventListener("click", populateTaskList);

function populateTaskList(event) {
  if (inputBox.value === "") {
    alert("You must provide something in the box");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    list.appendChild(li);
    inputBox.value = "";
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
}
