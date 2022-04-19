const router = require('express').Router();
const path = require('path');

const notesRoutes = require('./notesRoutes');

router.use(notesRoutes);

module.exports = router;