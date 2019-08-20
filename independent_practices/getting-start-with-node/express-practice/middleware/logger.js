const moment    = require('moment');
// Create our own middleware
const logger = (req, res, next) => {
    console.log('Hello');
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} ${moment().format()}`);
    next();
}

module.exports = logger;