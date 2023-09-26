const mongoose = require('mongoose');

const LeadInfoSchema = new mongoose.Schema({
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


module.exports = mongoose.model('LeadInfo', LeadInfoSchema);