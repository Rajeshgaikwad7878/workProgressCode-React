const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes ...";
};

const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("No title taken!"));
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

const readNote = (title) =>{
const notes =  loadNotes();
const note = notes.find((note)=> note.title === title)

if(note){
  console.log(chalk.inverse(note.title));
  console.log(note.body)
}else{
  console.log(chalk.inverse('No note found!'))
}
}

const listNotes =()=>{
  const notes = loadNotes()
  console.log(chalk.inverse('Your notes!'));
  notes.forEach((note) => {
    console.log(note.title)
  });
}

const saveNotes = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNotes: removeNotes,
  listNotes:listNotes,
  readNote: readNote
};
