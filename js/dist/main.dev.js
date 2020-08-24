"use strict";

// Fetching UI Elements
var myUl = document.querySelector("#myUl"),
    todoInput = document.querySelector("#todoInput"),
    addButton = document.querySelector("#addButton"),
    clearButton = document.querySelector("#clearButton"); // Adding Event listeners on the elements

var loadEventListener = function loadEventListener() {
  addButton.addEventListener("click", addTask);
  clearButton.addEventListener("click", clearTasks);
};

var addTask = function addTask() {
  var task = todoInput.value; // creating task in the UI

  var li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value)); // Appending parent child

  myUl.appendChild(li);
  reset();
};

reset = function reset() {
  todoInput.value = "";
};

var clearTasks = function clearTasks() {
  while (myUl.firstChild) {
    // Because while loop is faster than "innerHTML = '' "
    myUl.removeChild(myUl.firstChild);
  }
}; // Instantiating Event Listeners


loadEventListener();