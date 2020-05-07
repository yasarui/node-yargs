const yargs = require("yargs");
const chalk = require("chalk");
const notes = require('./notes');

// Customize yargs version
yargs.version('1.1.0')

//Create add Command
yargs.command({
    command: 'add',
    describe: 'Add a new Note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body);
    }
})

//Create Read Command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.readNote(argv.title);
    }
});

//Create Remove Command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
    },
    handler(argv) {
        notes.removeNote(argv.title);
    }
})

//Create List Command
yargs.command({
    command: 'list',
    describe: 'List add notes',
    handler(argv) {
        notes.listNotes();
    }
});

yargs.parse();