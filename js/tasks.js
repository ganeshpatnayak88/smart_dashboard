let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
const taskList = document.getElementById("taskList");

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const div = document.createElement("div");
        div.className = "card item";

        div.innerHTML = `
  <div class="item-left">
    <input type="checkbox" ${task.completed ? "checked" : ""}>
    <span class="${task.completed ? "done" : ""}">🧩 ${task.text}</span>
  </div>
  <button class="danger">🗑 Delete</button>
`;



        div.querySelector("input").onclick = () => {
            tasks[index].completed = !tasks[index].completed;
            saveTasks();
        };

        div.querySelector("button").onclick = () => {
            tasks.splice(index, 1);
            saveTasks();
        };

        taskList.appendChild(div);
    });
}

document.getElementById("addTaskBtn").onclick = () => {
    const input = document.getElementById("taskInput");
    if (input.value === "") return;

    tasks.push({ text: input.value, completed: false });
    input.value = "";
    saveTasks();
};

renderTasks();
