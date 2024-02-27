let todos = [
  {
    title: "plese work",
    description: "ihave been trying work please",
  },
  {
    title: "plssss",
    description: "i have been trying workkkkkk please",
  },
];
const form = document.querySelector(".todo-form");
const ul = document.createElement("ul");
function rendertodos(array) {
  const todoContainer = document.querySelector(".container");
  ul.classList.add("todos");
  ul.innerHTML = "";
  todoContainer.appendChild(ul);
  array.forEach((task, index) => {
    const li = document.createElement("li");
    const title = document.createElement("span");
    const description = document.createElement("p");
    const deletebtn = document.createElement("button");
    const editbtn = document.createElement("button"); 
    deletebtn.textContent = "delete";
    editbtn.textContent = "edit"; 
    deletebtn.addEventListener("click", (e) => {
      const selecttodo = title.textContent;
      removetodo(selecttodo);
    });
    editbtn.addEventListener("click", (e) => {
      const newTitle = prompt("Enter new title");
      const newDescription = prompt("Enter new description");
      if (newTitle && newDescription) {
        todos[index] = { title: newTitle, description: newDescription };
        rendertodos(todos);
      }
    });
    li.classList.add("todo");
    title.textContent = task.title;
    description.textContent = task.description;
    li.append(title, description);
    li.appendChild(deletebtn);
    li.appendChild(editbtn); 
    ul.appendChild(li);
  });
}
function addtodo() {
  const todoContainer = document.querySelector(".todos");
  const value = document.querySelector(".todo-input").value;
  const valueDescription = document.querySelector(".todo-description").value;
  const li = document.createElement("li");
  const span = document.createElement("span");
  const description = document.createElement("p");
  const deletebtn = document.createElement("button");
  deletebtn.textContent = "delete";
  deletebtn.addEventListener("click", (e) => {
    e.preventDefault();
    const selecttodo = span.textContent;
    removetodo(selecttodo);
  });
  //
  todos.push({
    title: value,
    description: valueDescription,
  });
  li.classList.add("todo");
  span.textContent = value;
  description.textContent = valueDescription;
  li.appendChild(span);
  li.appendChild(description);
  li.appendChild(deletebtn);
  todoContainer.appendChild(li);
}
const addtodobtn = document.querySelector("#submit-btn");
addtodobtn.addEventListener("click", function (e) {
  addtodo();
  e.preventDefault();
});
function removetodo(selecttodo) {
  const filteredtodo = todos.filter((todos) => {
    return todos.title !== selecttodo;
  });
  todos = filteredtodo;
  rendertodos(filteredtodo);
}
window.addEventListener("load", () => {
  rendertodos(todos);
});
