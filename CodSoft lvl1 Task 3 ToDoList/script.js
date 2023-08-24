const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// Load tasks from local storage on page load
const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function updateLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <button class="deleteButton" data-index="${index}">Delete</button>
    `;
    taskList.appendChild(li);
  });
  attachDeleteEventListeners();
}

function attachDeleteEventListeners() {
  const deleteButtons = document.querySelectorAll(".deleteButton");
  deleteButtons.forEach(button => {
    button.addEventListener("click", e => {
      const index = e.target.getAttribute("data-index");
      tasks.splice(index, 1);
      updateLocalStorage();
      renderTasks();
    });
  });
}

addButton.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    tasks.push(taskText);
    updateLocalStorage();
    renderTasks();
    taskInput.value = "";
  }
});

renderTasks();