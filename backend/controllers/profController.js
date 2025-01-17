const path = require('path');
const user = require('../user.json');

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

exports.getUser = (req, res, next) => {
    res.json(user);
}