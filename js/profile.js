const usernameInput = document.getElementById("usernameInput");
const saveNameBtn = document.getElementById("saveNameBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const resetBtn = document.getElementById("resetBtn");

/* LOAD SAVED NAME */
usernameInput.value = localStorage.getItem("username") || "";

/* SAVE NAME */
saveNameBtn.onclick = () => {
  localStorage.setItem("username", usernameInput.value);
  alert("Name saved");
};

/* THEME TOGGLE */
toggleThemeBtn.onclick = () => {
  document.body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    document.body.classList.contains("light") ? "light" : "dark"
  );
};

/* LOAD THEME */
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light");
}

/* RESET DATA */
resetBtn.onclick = () => {
  if (confirm("Are you sure?")) {
    localStorage.clear();
    location.reload();
  }
};
