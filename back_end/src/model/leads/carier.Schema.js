const mongoose = require('mongoose');

const  CarierSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true
  },
  cover: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },

});


module.exports = mongoose.model('Carier', CarierSchema);