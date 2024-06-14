const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/pinterestdemo");

// Define the schema for the user model
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String
  },
  dp: {
    type: String
  },
  post: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  email: {
    type: String,
    required: true,
    unique: true,
  },
  fullname: {
    type: String,
    required: true,
  }
});

userSchema.plugin(plm);


// Create the User model
module.exports = mongoose.model('User', userSchema);