const path = require('path');
const fs = require("fs");
const utils = require('util');
// unique ID generator package!
const { v4: uuidv4 } = require("uuid");


function createNote(body, notes) {
    const note = body;

    notes.push({...note, id: uuidv4()});
    
    fs.writeFileSync(
        path.join(__dirname, './db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return notes;
}
readFile = () => JSON.parse(fs.readFileSync(path.join(__dirname, './db.json')));

function deleteNote( id, notes){

    console.log(notes)

    const results = notes.filter(note => note.id !== id);

    console.log(results)

    fs.writeFileSync(path.join(__dirname, 'db.json'),
    JSON.stringify({ notes: results }, null, 2)
    );
    return notes;
}





module.exports = { createNote, readFile, deleteNote }