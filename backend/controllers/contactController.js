const mongodb = require('../db/connect');

const getAllData = async (req, res, next) => {
  const result = await mongodb.getDb().collection('contacts').find();
  //console.log(result);
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
    //console.log(lists); // for testing
  });
}

const getContact = async (req, res, next) => {
  const contactId = req.params.id;
  const result = await mongodb.getDb().collection('contacts').find();
  //console.log(result);
  result.toArray().then((lists) => {
    if (contactId) {
      console.log('Contact ID:', contactId);
      const contact = lists.find((contact) => contact._id.toString() === contactId);
      if (contact) {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contact);
      } else {
        res.setHeader('Content-Type', 'application/json');
        res.status(404).json({ message: 'Contact not found' });
      }
    } else {    
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]); // we just need the first one (the only one)
    console.log(lists[0]);
    }
  });
};

module.exports = { getAllData, getContact };