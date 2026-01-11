const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

addBtn.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    <span class="task">${taskText}</span>
    <span class="delete">✖</span>
  `;

  // Mark complete when clicked
  li.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) return;
    li.classList.toggle("completed");
  });

  // Delete task
  li.querySelector(".delete").addEventListener("click", () => {
    li.remove();
  });

  taskList.appendChild(li);
  taskInput.value = "";
}
