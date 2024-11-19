path = require('path');
function time(req, res, next) {
    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();

    if (day < 1 || day > 5 || hour < 9 || hour > 17) {
        res.sendFile(path.join(__dirname, '../Views/OutofHours.html'));
    } else {
        next();
    }
}

module.exports = time;
