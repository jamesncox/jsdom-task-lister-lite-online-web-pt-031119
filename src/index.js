const createTaskForm = document.querySelector("#create-task-form");
const newTaskDescription = document.querySelector("#new-task-description");
const myTodos = document.querySelector("#tasks");

// document.addEventListener("DOMContentLoaded", () => {
//   // your code here
// });

createTaskForm.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  // console.log(newTaskDescription.value);

  const li = document.createElement("li");
  // li.appendChild(document.createTextNode(`${newTaskDescription.value}`));
  li.textContent = newTaskDescription.value;

  myTodos.appendChild(li);
}
