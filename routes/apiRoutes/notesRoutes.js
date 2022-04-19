const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { Script } = require("vm");

const {createNote, readFile} = require("../db/script.js")

router.get('/notes', (req, res) => {
    const {notes} = readFile()
    let results = notes
    res.json(results)
});


router.post('/notes', (req, res) => {
    const {notes} = readFile() 
    const newNote = createNote(req.body, notes);
    res.json(newNote);
});



module.exports = router;