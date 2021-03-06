const express   = require('express');
// const I_LOVE = require('./config');
const path      = require('path');
const logger    = require('./middleware/logger');

// console.log("I love ", I_LOVE);
const app = express();

// Init middleware
app.use(logger); 

// Body Parser Middleware - to take in info send from the form submittion
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set static folder - everything this folder will work.
app.use(express.static(path.join(__dirname, 'public')));

// Members API Route
app.use('/api/members', require('./routes/api/members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Sever started on port ${PORT}` ))
