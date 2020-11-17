// Fetching UI Elements
const myUl = document.querySelector("#myUl"),
  todoInput = document.querySelector("#todoInput"),
  addButton = document.querySelector("#addButton"),
  clearButton = document.querySelector("#clearButton");
  historyButton = document.querySelector('#HistoryButton');

// Adding Event listeners on the elements
const loadEventListener = () => {
  addButton.addEventListener("click", addTask);

  clearButton.addEventListener("click", clearTasks);
  historyButton.addEventListener("click", getHistory)

};

const addTask = () => {
  console.log("ADD TASK");
  const task = todoInput.value;

  // creating task in the UI
  const li = document.createElement("li");


  // saving to local storage
  localStorage.setItem("task", todoInput.value )

  li.appendChild(document.createTextNode(task));
  
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


// HIstory
  let allTasks;
  if (localStorage.getItem('allTasks') === null) {
      allTasks = []
  } else {
      allTasks = JSON.parse(localStorage.getItem('allTasks'))
      console.log("JSON saved");
  }
  allTasks.push(task)
  localStorage.setItem('allTasks', JSON.stringify(allTasks))
  alert('The Task is saved in history')

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

function enterKey() {
  console.log("ENTER KEY PRESSED");
  // get input
  var input = document.getElementById("todoInput");
  // onKey up
  input.onkeyup = function(key) {

  // 13 represents Enter
      if(key.keyCode === 13){
        addTask();
      }
  } 
}
enterKey();

// getting all tasks from history
const atl = localStorage.getItem('allTasks');
console.log(atl);

// get history for history button
function getHistory(e){
  e.preventDefault()
  const allTasks = JSON.parse(localStorage.getItem('allTasks'))
  let  output = ``;
  allTasks.forEach(function (task) {

        // using materialize
      
      output = output +` <p> ${task}</p>`;
      
      console.log(task)
  }) ;
  document.getElementById('main-container').innerHTML = output;
}

// Instantiating Event Listeners
loadEventListener();