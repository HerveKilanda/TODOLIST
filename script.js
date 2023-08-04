
const taskInput = document.getElementById("task-input");
const todoForm = document.getElementById("todo-form");
const listContainer = document.getElementById("list-container");


function addTask(task) {
  const li = document.createElement("li");
  li.textContent = task;
  listContainer.appendChild(li);

  
  li.addEventListener("click", () => {
    li.classList.toggle("checked");
  });
}


todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = taskInput.value.trim();
  if (task !== "") {
    addTask(task);
    taskInput.value = "";
  }
});


addTask("Tache initiale");
