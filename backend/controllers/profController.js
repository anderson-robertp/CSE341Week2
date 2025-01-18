const path = require('path');
const user = require('../user.json');
const mongodb = require('../db/connect');

exports.getIndex = (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
};

exports.getUser = (req, res, next) => {
    res.json(user);
}

const getData = async (req, res, next) => {
    const result = await mongodb.getDb().collection('professional').find();
    console.log(result);
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]); // we just need the first one (the only one)
      console.log(lists[0]);
    });
  };
  
  module.exports = { getData };