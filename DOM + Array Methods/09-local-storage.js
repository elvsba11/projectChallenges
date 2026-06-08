// Warm up 6 — Local Storage & DOM Interaction:
const todoInput = document.querySelector("#todo-input");
const addBtn = document.querySelector("#add-btn");
const clearBtn = document.querySelector("#clear-btn");
const todoList = document.querySelector("#todo-list");

// 1. Array Setup
let myTodos = JSON.parse(localStorage.getItem("myTodos")) || [];
// 2. renderTodos Function
function renderTodos() {
  todoList.innerHTML = ""; //clear for load

  myTodos.forEach((todo) => {
    const li = document.createElement("li");
    li.textContent = todo;
    todoList.appendChild(li);
  });
}
// 3. Event and logics
addBtn.addEventListener("click", add);

function add() {
  if (todoInput.value.trim() === "") return; // if no input it return
  myTodos.push(todoInput.value);

  saveStorage(); //save
  renderTodos(); //update

  todoInput.value = ""; //clear input text
}

function saveStorage() {
  localStorage.setItem("myTodos", JSON.stringify(myTodos));
}

// 4. Clearn all using btn clear
clearBtn.addEventListener("click", clear);

function clear(li) {
  myTodos = [];
  localStorage.removeItem("myTodos");

  renderTodos();
}
//Initial Load
renderTodos();
