//starting up
const todos = ["clean the apartment", "go to the gym"];
const form = document.querySelector(".todo-form");
const ul = document.createElement("ul");
form.appendChild(ul);

todos.forEach((elemnt) => {
  const li = document.createElement("li");
  li.textContent = elemnt;
  ul.appendChild(li);
});
