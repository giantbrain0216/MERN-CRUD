import mongoose = require('mongoose');

// DEFINE THE OBJECT SCHEMA
var userSchema = new mongoose.Schema ({
   created: {
       type: Date,
       default:Date.now
   } ,
   username: {
       type: String,
       default: '',
       trim: true,
       required: 'Title is required'
   },
   password: {
       type: String,
       default: '',
       trim: true,
       required: 'Title is required'
   }
});

// MAKE THIS PUBLIC SO THE CONTROLLER CAN SEE IT
export var User = mongoose.model('User', userSchema);