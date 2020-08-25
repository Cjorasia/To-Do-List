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

  //adding checkmark
  var checkMark = document.createElement("button");
  checkMark.innerHTML = "&check;";
  // adding classname
  checkMark.className = "listItemButton";
  // setting attribute
  checkMark.setAttribute("onclick", "checkMe(this)");
  // Appending parent child4
  li.appendChild(checkMark);

  // Adding crossmark
  var crossMark = document.createElement("button");
  crossMark.innerHTML = "&#x2715"; 
  crossMark.className = "listItemButton"; 
  crossMark.setAttribute("onclick", "removeMe(this)");
  li.appendChild(crossMark);

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

checkMe = (item) =>{
  // select parent element
  var liTag = item.parentElement;

  //
  liTag.style.textDecoration = "line-through";

}

removeMe = (item) => {

  // getting parentElement
  var liTag = item.parentElement;
  // getting parentElement
  var ulTag = liTag.parentElement;
  // deleting childElement i.e liTag
  ulTag.removeChild(liTag);

  // delete from array
  taskList.pop();
  alert(taskList);

}

// Instantiating Event Listeners
loadEventListener();
