// Fetching UI Elements
const myUl = document.querySelector("#myUl"),
  todoInput = document.querySelector("#todoInput"),
  addButton = document.querySelector("#addButton"),
  clearButton = document.querySelector("#clearButton");

// Adding Event listeners on the elements
const loadEventListener = () => {
  addButton.addEventListener("click", addTask);

  clearButton.addEventListener("click", clearTasks);


};

const addTask = () => {
  const task = todoInput.value;

  // creating task in the UI
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(todoInput.value));

  // Appending parent child
  myUl.appendChild(li);

  reset();
};

reset = () =>{
  todoInput.value = "";
}

const clearTasks = () => {
  while (myUl.firstChild) { // Because while loop is faster than "innerHTML = '' "
    myUl.removeChild(myUl.firstChild);
  }
};

// Instantiating Event Listeners
loadEventListener();
