const mongoose = require('mongoose');

const AdminUserSchema = new mongoose.Schema({
  username: {
    type: String,
  
    unique: true
  },
  email: { 
    type: String,
     required: true,
     unique: true

  },
  password: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    
  },
  role: {
    type: String,
    enum: ['Admin', 'Manager', 'Lead Manager'],
   
  }
});

const User = mongoose.model('UserAdmin', AdminUserSchema);

module.exports = User;