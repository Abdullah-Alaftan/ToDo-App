let todos = [];
const form = document.querySelector(".todo-form");
const ul = document.createElement("ul");
ul.classList.add("todos");
const todoContainer = document.querySelector(".container");

window.addEventListener("load", (e) => {
  rendertodos(todos);
});

function rendertodos(array) {
  console.log(array);

  todoContainer.appendChild(ul);

  array.forEach((task) => {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const description = document.createElement("p");
    const deletebtn = document.createElement("button");
    const editbtn = document.createElement("button");

    editbtn.textContent = "edit";
    editbtn.classList.add("btn", "edit-btn");
    deletebtn.textContent = "delete";
    // deletebtn.addEventListener("click", (e) => {
    //   const selecttodo = e.target.parntNode;
    //   const todo = e.target.parentNode.querySelector("span").textContent;

    //   removetodo(selecttodo);
    // });
    li.classList.add("todo");
    title.textContent = task.title;
    description.textContent = task.description;
    li.append(title, description, editbtn, deletebtn);
    ul.appendChild(li);
  });
}

function addtodo() {
  const todoContainer = document.querySelector(".container");
  const value = document.querySelector(".todo-input").value;
  if (!value) {
    alert("write somthinge please");
    return;
  }
  const li = document.createElement("li");
  const span = document.createElement("span");

  const todo = {
    title: value,
    description: "to be dynamic",
  };
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "delete";

  deletebtn.addEventListener("click", (e) => {
    const selecttodo = e.target.parentNode;
    const todo = selecttodo.querySelector("span").textContent;
    removetodo(todo);
  });
  //
  todos.push(todo);

  li.classList.add("todo");
  span.textContent = value;
  li.appendChild(span);
  li.appendChild(deletebtn);
  todoContainer.appendChild(li);
}

const addtodobtn = document.querySelector("#submit-btn");

console.log("addtodobtn:", addtodobtn);

addtodobtn.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("submitting.....");
  addtodo();
  // DO NOT refresh the page
});

function removetodo(selecttodo) {
  const filteredtodo = todos.filter((todo) => {
    return todo.title !== selecttodo;
  });
  ul.innerHTML = "";
  console.log(filteredtodo);
  todos = filteredtodo;

  rendertodos(todos);
}

window.addEventListener("load", (e) => {
  rendertodos(todos);
});

// window.addEventListener("load", (e) => {
//   rendertodos(todos);
//   const editbtns = document.querySelectorAll(".edit-btn");
//   editbtns.forEach((btn) => {
//     const todo = e.target.parentNode;
//     const updatedvalue = prompt("edit todo");
//     let selecttodo = todo.querySelector("span");
//     selecttodo.textContent = updatedvalue;
//   });
// });
