const mongoose = require('mongoose');

const ProjectSchema = mongoose.Schema({
  cover: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
 
  image: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});



module.exports = mongoose.model('Project', ProjectSchema);
