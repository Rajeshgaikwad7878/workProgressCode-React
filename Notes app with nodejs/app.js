const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

//customize yargs version
yargs.version("1.1.0");

//create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note a title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note a body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    // console.log('Adding a new note!', argv);
    // console.log('Title: ' + argv.title);
    // console.log('Title: ' + argv.body);
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "List your note",
  handler() {
    notes.listNotes();
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title)
  },
});
//Add, remove, read, list
//console.log(yargs.argv)
yargs.parse();
