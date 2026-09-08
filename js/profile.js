const usernameInput =
  document.getElementById("usernameInput");

const saveNameBtn =
  document.getElementById("saveNameBtn");

const toggleThemeBtn =
  document.getElementById("toggleThemeBtn");

const resetBtn =
  document.getElementById("resetBtn");


/* LOAD SAVED NAME */

usernameInput.value =
  localStorage.getItem("username") || "";


/* SAVE NAME */

saveNameBtn.addEventListener(
  "click",
  () => {

    const username =
      usernameInput.value.trim();

    localStorage.setItem(
      "username",
      username
    );

    alert("Name saved");
  }
);


/* THEME TOGGLE */

toggleThemeBtn.addEventListener(
  "click",
  () => {

    document.body.classList.toggle(
      "light"
    );

    localStorage.setItem(
      "theme",
      document.body.classList.contains("light")
        ? "light"
        : "dark"
    );

  }
);


/* LOAD THEME */

if (
  localStorage.getItem("theme") === "light"
) {

  document.body.classList.add("light");

}


/* RESET DATA */

resetBtn.addEventListener(
  "click",
  () => {

    if (
      confirm(
        "Are you sure you want to reset all dashboard data?"
      )
    ) {

      localStorage.clear();

      location.reload();

    }

  }
);