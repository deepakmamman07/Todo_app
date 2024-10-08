let inputField = document.getElementById("inputField");
let addButton = document.getElementById("addButton");
let addTodoDiv = document.getElementById("addTodo");
// console.log(inputField)
// console.log(addButton)

const addTodos = () => {
  //create addtodos function and pass in buttons event.

  console.log(inputField.value);
  //console the input field value which written by user.
  let D_div = document.createElement("div");
  D_div.classList.add("dynamic_div");

  let pElem = document.createElement("p");
  //now create new paragraph using creat element and pass tag name in "" .
  pElem.textContent = inputField.value;
  //the text content of tag p is equal to input field value, which is written by user and we console it using inputField.value

  let delButton = document.createElement("button");
  //create a new button element and store in delButton.
  delButton.textContent = "Delete";
  //using text context give name to delButton

  D_div.append(pElem);
  //now append pElem values in addTodo div.
  D_div.append(delButton);
  //now append delButton in addTodo div.

  addTodoDiv.append(D_div);
  
  //calling saveTodo function to save data in local storage
  saveTodos();

  inputField.value = "";
};

const  saveTodos = () => {
  const TodoData = [];
  //create array saveTodo
  addTodoDiv.querySelectorAll('.dynamic_div').forEach(D_div => {
    //apply for each loop is used to select all elements with the class dynamic_div inside the addTodoDiv container and perform operations on each of these elements

    const text = D_div.querySelector('p').textContent;
    TodoData.push(text);
  })
  localStorage.setItem("myData",JSON.stringify(TodoData));
  console.log('data is added')
}

addButton.addEventListener("click", () => {
  //first add event listner,and call add todos function .
  addTodos();
});

addTodoDiv.addEventListener("click", (e) => {
  // add eventlistner on addtododiv pass event
  console.log("delete");

  if (e.target.tagName === "BUTTON") {
    // apply conditon if the tagName which is targeting equals to button then
    // e.target.previousSibling.remove();
    // // remove previous sibling of that event.means privious sibling of delButton is paragraph
    // e.target.remove();
    e.target.parentElement.remove(); // Remove the parent div
    // romove targeted event means delButton
    saveTodos();
  }
});
