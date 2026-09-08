let notes = JSON.parse(
  localStorage.getItem("notes") || "[]"
);

const notesContainer =
  document.getElementById("notesContainer");

const noteInput =
  document.getElementById("noteInput");

const addNoteBtn =
  document.getElementById("addNoteBtn");

function saveNotes() {

  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );

  renderNotes();
}

function renderNotes() {

  notesContainer.innerHTML = "";

  if (notes.length === 0) {

    const emptyMessage =
      document.createElement("p");

    emptyMessage.className =
      "empty-state";

    emptyMessage.textContent =
      "No notes yet. Add your first note.";

    notesContainer.appendChild(
      emptyMessage
    );

    return;
  }

  notes.forEach((note, index) => {

    const div =
      document.createElement("article");

    div.className = "card item";

    const text =
      document.createElement("span");

    text.textContent =
      `🗒 ${note}`;

    const deleteButton =
      document.createElement("button");

    deleteButton.type = "button";

    deleteButton.className =
      "danger";

    deleteButton.textContent =
      "🗑 Delete";

    deleteButton.setAttribute(
      "aria-label",
      "Delete note"
    );

    deleteButton.addEventListener(
      "click",
      () => {

        notes.splice(index, 1);

        saveNotes();
      }
    );

    div.appendChild(text);
    div.appendChild(deleteButton);

    notesContainer.appendChild(div);
  });
}

function addNote() {

  const text =
    noteInput.value.trim();

  if (!text) {
    return;
  }

  notes.push(text);

  noteInput.value = "";

  saveNotes();

  noteInput.focus();
}

addNoteBtn.addEventListener(
  "click",
  addNote
);

renderNotes();