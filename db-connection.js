const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost:27017/2dgames', {
     }).then(() => {
    console.log('Connected to MongoDB');
  }).catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = db;