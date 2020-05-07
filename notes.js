const chalk = require("chalk");
const fs = require("fs");

const fetchNotes = () => {
    try {
        let contents = fs.readFileSync("notes.json").toString();
        return JSON.parse(contents);
    } catch (e) {
        return [];
    }
}

const saveNotes = (notes) => {
    fs.writeFile('notes.json', JSON.stringify(notes), (err) => {
        if (err) throw err;
        console.log(chalk.green.inverse("Saved successfully"));
    })
}

const addNote = (title, body) => {
    const notes = fetchNotes();
    const duplicateNotes = notes.find(item => item.title === title)
    if (!duplicateNotes) {
        notes.push({
            title,
            body
        });
        saveNotes(notes);
    } else {
        console.log(chalk.red.inverse("Title already been taken"));
    }
}

const removeNote = (title) => {
    const notes = fetchNotes();
    const newNotes = notes.filter(item => item.title !== title);
    if (notes.length > newNotes.length) {
        saveNotes(newNotes);
    } else {
        console.log(chalk.red.inverse("Note not Found"));
    }
}

const readNote = (title) => {
    const notes = fetchNotes();
    const note = notes.find(item => item.title === title);
    if (note) {
        console.log(chalk.green.inverse("Title :", note.title));
        console.log(chalk.green(note.body));
    } else {
        console.log(chalk.red.inverse("Note not found"))
    }
}

const listNotes = () => {
    const notes = fetchNotes();
    notes.forEach((item) => {
        console.log(item.title);
    })
}

module.exports = {
    addNote,
    removeNote,
    readNote,
    listNotes
}