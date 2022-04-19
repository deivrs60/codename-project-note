const path = require('path');
const fs = require('fs')

// unique ID generator!
const { v4: uuidv4 } = require("uuid")


function createNote(body, notes) {
    const note = body;

    notes.push({...note, id: uuidv4()});
    
    fs.writeFileSync(
        path.join(__dirname, './db.json'),
        JSON.stringify({ notes }, null, 2)
    );
    return notes;
}



module.exports = { createNote }