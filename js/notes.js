let notes = JSON.parse(localStorage.getItem("notes")) || [];

const notesContainer = document.getElementById("notesContainer");
const noteInput = document.getElementById("noteInput");

function saveNotes() {
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
}

function renderNotes() {
    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        const div = document.createElement("div");
        div.className = "card item";
        div.innerHTML = `
  <span>🗒 ${note}</span>
  <button class="danger">🗑 Delete</button>
`;


        div.querySelector("button").onclick = () => {
            notes.splice(index, 1);
            saveNotes();
        };

        notesContainer.appendChild(div);
    });
}

document.getElementById("addNoteBtn").onclick = () => {
    if (noteInput.value === "") return;

    notes.push(noteInput.value);
    noteInput.value = "";
    saveNotes();
};

renderNotes();
