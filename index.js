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
    const checkbox = document.createElement("input"); 
    deletebtn.textContent = "delete";
    editbtn.textContent = "edit";
    checkbox.type = "checkbox"; 
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
    checkbox.addEventListener("change", (e) => {
      if (checkbox.checked) {
        title.style.textDecoration = "line-through";
        description.style.textDecoration = "line-through";
      } else {
        title.style.textDecoration = "none";
        description.style.textDecoration = "none";
      }
    });
    li.classList.add("todo");
    title.textContent = task.title;
    description.textContent = task.description;
    li.append(checkbox, title, description); 
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
  const editbtn = document.createElement("button"); 
  const checkbox = document.createElement("input"); 
  deletebtn.textContent = "delete";
  editbtn.textContent = "edit"; 
  checkbox.type = "checkbox"; 
  deletebtn.addEventListener("click", (e) => {
    e.preventDefault();
    const selecttodo = span.textContent;
    removetodo(selecttodo);
  });
  editbtn.addEventListener("click", (e) => {
    const newTitle = prompt("Enter new title");
    const newDescription = prompt("Enter new description");
    if (newTitle && newDescription) {
      const index = todos.findIndex(todo => todo.title === span.textContent && todo.description === description.textContent);
      todos[index] = { title: newTitle, description: newDescription };
      rendertodos(todos);
    }
  });
  checkbox.addEventListener("change", (e) => {
    if (checkbox.checked) {
      span.style.textDecoration = "line-through";
      description.style.textDecoration = "line-through";
    } else {
      span.style.textDecoration = "none";
      description.style.textDecoration = "none";
    }
  });
  todos.push({
    title: value,
    description: valueDescription,
  });
  li.classList.add("todo");
  span.textContent = value;
  description.textContent = valueDescription;
  li.append(checkbox, span, description); 
  li.appendChild(deletebtn);
  li.appendChild(editbtn); 
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
