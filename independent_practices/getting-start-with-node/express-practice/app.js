const express   = require('express');
const path      = require('path');
const logger    = require('./middleware/logger');
const members   = require('./Members');

const app = express();



// Init middleware
app.use(logger); 

app.get('/api/members', (req, res) => {
    res.json(members);
})

// Set static folder - everything this folder will work.
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Sever started on port ${PORT}` ))