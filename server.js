const express = require('express');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));;

const htmlRoutes = require('./routes/htmlRoutes');
const apiRoutes = require('./routes/apiRoutes');


// use Routes
app.use('/api', apiRoutes); 
app.use('/', htmlRoutes);






app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});