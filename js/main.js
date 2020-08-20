// array to store tasks
var tasklist = [];

function addItem(){

    var task = getElementById("todoInput").value; // Get access of Input value and store in task variable
    var ul = getElementById("myUl");

    if (tasklist.length <= 8){
       
        tasklist.push(task);

        var li = document.createElement("li"); // create list tag
        var text = document.createTextNode(task); // create text
        li.appendChild(text); // appended text node to list
        ul.appendChild(li); // appended list to ul *** HTML STRUCTURE ***
    }
}