//starting up
const todos = ["clean the apartment", "go to the gym"];
const form = document.querySelector(".todo-form");
const todoContainer = document.querySelector(".container");
const ul = document.createElement("ul");
ul.classList.add("todos");
todoContainer.appendChild(ul);

todos.forEach((elemnt) => {
  const li = document.createElement("li");
  li.classList.add("todo");
  li.textContent = elemnt;
  ul.appendChild(li);
});

// 1. get the button to add an event listner
const addtodobtn = document.querySelector("#submit-btn");
console.log("addtodobtn:", addtodobtn);

// 2. add event listner to the button so when we click we can do stuff
addtodobtn.addEventListener("click", function (e) {
  console.log("submitting.....");
  const todoContainer = document.querySelector(".todos");
  // 3. get the value from the input
  const value = document.querySelector(".todo-input").value;

  // create li tag
  const li = document.createElement("li");
  // add value to li tag
  li.textContent = value;
  li.classList.add("todo");

  // send the li tag to HTML
  todoContainer.appendChild(li);

  // DO NOT refresh the page
  e.preventDefault();
});
