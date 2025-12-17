const greetingEl = document.getElementById("greeting");
const dateTimeEl = document.getElementById("datetime");

const hour = new Date().getHours();
let greeting = "Hello";

if (hour < 12) greeting = "Good Morning";
else if (hour < 18) greeting = "Good Afternoon";
else greeting = "Good Evening";

greetingEl.textContent = `${greeting}, Welcome Back`;

function updateTime() {
  dateTimeEl.textContent = new Date().toLocaleString();
}

setInterval(updateTime, 1000);
updateTime();

const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.getElementById("total").textContent = tasks.length;
document.getElementById("completed").textContent =
  tasks.filter(t => t.completed).length;
document.getElementById("pending").textContent =
  tasks.filter(t => !t.completed).length;
