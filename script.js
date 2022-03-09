const qs = (e) => document.querySelector(e);

const addBtn = qs(".add");
const saveBtn = qs(".save");
const cancelBtn = qs(".cancel");
const deleteBtns = document.getElementsByClassName("note__delete");
const deleteAllBtn = qs(".delete-all");

const noteArea = qs(".note-area");
const notePanel = qs(".note-panel");
const category = qs("#category");
const textarea = qs("#text");
const error = qs(".error");
let selectedValue;
let cardID = 0;

//function
const openPanel = () => {
    notePanel.style.display = "flex";
};

const closePanel = () => {
    notePanel.style.display = "none";
    error.style.visibility = "hidden";
    textarea.value = "";
    category.selectedIndex = 0;
};

const addNote = () => {
    if (
        textarea.value !== "" &&
        category.options[category.selectedIndex].value !== 0
    ) {
        createNote();
        error.style.visibility = "hidden";
    } else {
        error.style.visibility = "visible";
    }
};

const createNote = () => {
    const newNote = document.createElement("div");
    newNote.classList.add("note");
    newNote.setAttribute("id", cardID);

    newNote.innerHTML = `
    <div class="note-header">
        <h3 class="note-title">${selectedValue}</h3>
        <button class="delete-note" onclick="deleteNote(${cardID})">
            <i class="fas fa-times icon"></i>
        </button>
    </div>
    <div class="note-body">
        ${textarea.value}
    </div>`;

    noteArea.append(newNote);
    cardID++;
    textarea.value = "";
    category.selectedIndex = 0;
    notePanel.style.display = "none";
    checkColor(newNote);
};

const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
};

const checkColor = (note) => {
    switch (selectedValue) {
        case "Zakupy":
            note.style.backgroundColor = "#64DC35";
            break;
        case "Praca":
            note.style.backgroundColor = "#DADC35";
            break;
        case "Dom":
            note.style.backgroundColor = "#35DCB0";
            break;
        case "Szkoła":
            note.style.backgroundColor = "#4BADF7";
            break;
        case "Wydarzenia":
            note.style.backgroundColor = "#C477FC";
            break;
        case "Ważne":
            note.style.backgroundColor = "#F04747";
            break;
    }
};

const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
}

const deleteAllNotes = () => {
    noteArea.textContent = "";
}

//eventListener
addBtn.addEventListener("click", openPanel);
cancelBtn.addEventListener("click", closePanel);
saveBtn.addEventListener("click", addNote);
deleteAllBtn.addEventListener("click", deleteAllNotes);