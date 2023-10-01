const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  adminId:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'UserAdmin'
  },
  
  name: { type: String, required: true, unique: true },
  numberOfUsers: { type: Number, required: true },
  maxAllowedUsers: { type: Number, required: true },
  companyId: { type: String, required: true, unique: true },
  users: [
    {
      fullName: { type: String, required: true },
      email: { type: String, required: true },
      contactNumber: { type: String, required: true },
      userLevel: { type: String, required: true },
      userID: { type: String, required: true },
      password: { type: String, required: true },  
      leadInfo: [
        {
          type: Object,
          ref: 'LeadInfo'
        }
      ]
    }
  ]
});

module.exports = mongoose.model('Company', companySchema);