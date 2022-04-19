const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { Script } = require("vm");

const {createNewNote, readFile} = require("../../db/script")

router.get('/notes', (req, res) => {
    const {notes} = readFile()
    let results = notes
    res.json(results)
});


router.post('/notes', (req, res) => {
    const {notes} = readFile() 
    const newNote = createNewNote(req.body, notes);
    res.json(newNote);
});



module.exports = router;