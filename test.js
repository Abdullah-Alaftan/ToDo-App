let todos = ["clean the apartment", "go to the gym"];
const form = document.querySelector(".todo-form");
const ul = document.createElement("ul");

function rendertodos(array) {
  const todoContainer = document.querySelector(".container");

  ul.classList.add("todos");
  ul.innerHTML = "";
  todoContainer.appendChild(ul);

  array.forEach((task) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.addEventListener("click", (e) => {
      //   const value = e.target.parentNode.querySelector("span").textContent;
      const selecttodo = e.target.previousSibling.textContent;
      console.log(selecttodo);
      removetodo(selecttodo);
    });
    li.classList.add("todo");
    span.textContent = task;
    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(deletebtn);
  });
}

function addtodo() {
  const todoContainer = document.querySelector(".todos");
  const value = document.querySelector(".todo-input").value;

  const li = document.createElement("li");

  const span = document.createElement("span");
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "delete";

  deletebtn.addEventListener("click", (e) => {
    e.preventDefault();
    const selecttodo = e.target.previousSibling.textContent;
    console.log(selecttodo);
    removetodo(selecttodo);
  });
  //
  todos.push(value);

  // send the li tag to HTML
  li.classList.add("todo");
  span.textContent = value;
  li.appendChild(span);
  li.appendChild(deletebtn);
  todoContainer.appendChild(li);
}
const addtodobtn = document.querySelector("#submit-btn");
console.log("addtodobtn:", addtodobtn);
addtodobtn.addEventListener("click", function (e) {
  console.log("submitting.....");
  addtodo();
  // DO NOT refresh the page
  e.preventDefault();
});
function removetodo(selecttodo) {
  const filteredtodo = todos.filter((todo) => {
    return todo !== selecttodo;
  });
  todos = filteredtodo;
  rendertodos(filteredtodo);
}

window.addEventListener("load", () => {
  rendertodos(todos);
});
