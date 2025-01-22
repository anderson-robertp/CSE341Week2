const mongodb = require('../db/connect');
const {ObjectId} = require('mongodb').ObjectId;

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
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().collection('contacts').find();
  //console.log(result);
  result.toArray().then((lists) => {
    if (contactId) {
      //console.log('Contact ID:', contactId);
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
    //console.log(lists[0]);
    }
  });
};

const createContact = async (req, res, next) => {
  const newContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    faovriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const result = await mongodb.getDb().collection('contacts').insertOne(newContact);
  if (result.acknowledged) {
    res.status(201).json({ message: 'Contact created successfully}' });
  } else {
    res.status(500).json({ message: 'Error creating contact' });
  }
};

const updateContact = async (req, res, next) => {
  const contactId = new ObjectId(req.params.id);
  const updatedContact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    faovriteColor: req.body.favoriteColor,
    birthday: req.body.birthday
  }
  const result = await mongodb.getDb().collection('contacts').updateOne({ _id: mongodb.getPrimaryKey(contactId) }, { $set: updatedContact });
  if (result.modifiedCount > 0) {
    res.status(204).json({ message: 'Contact updated successfully' });
  } else {
    res.status(500).json({ message: 'Error updating contact' });
  }
}; // to be implemented

const deleteContact = async (req, res, next) => {
  const contactId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().collection('contacts').deleteOne({ _id: mongodb.getPrimaryKey(contactId) });
  console.log(result); // for testing
  if (result.deletedCount > 0) {
    res.status(200).json({ message: 'Contact deleted successfully' });
  } else {
    res.status(500).json({ message: 'Error deleting contact' });
  }
  //console.log(result); // for testing
}; // to be implemented

module.exports = { getAllData, getContact, createContact, updateContact, deleteContact };