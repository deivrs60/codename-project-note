const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const { Script } = require("vm");

const { createNote, readFile, deleteNote } = require('../../db/script');

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


router.delete('/notes/:id', (req, res) => {
    const{ notes } = readFile()
    const deleteSelectedNote = deleteNote(req.params.id, notes);
    res.json(deleteSelectedNote);
})


module.exports = router;