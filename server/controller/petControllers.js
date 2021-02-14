//controllers for the database CRUD functions

const model = require('../models/petModels.js');

// const mongoose = require('mongoose'); // might not need this


const itemController = {};

//controller for creating new item
itemController.createItem = function(req,res,next) {
  models.create(req.body)
  .then(status => {
    console.log('success status:', status);
    return next();
  })  
  .catch(err => {
    next({
      log: 'There was an express error on itemController.createItem',
      message: 'Cannot create new item'
    });
  }); 
};
//controller for displaying items
itemController.readItem = (req,res) => {
  models.find({})
    .then(query => {
      res.locals.query = query;
      return next();
    })
    .catch(err => {
      next({
        log: 'There was an express error on itemController.readItem',
        message: 'Cannot find item'
      });
    });
};

//controller for updating item
itemController.updateItem = (req,res) => {
    
};

//controller for deleting item
itemController.deleteItem = (req,res) => {
    
};


module.exports = itemController;