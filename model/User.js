const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    userType: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

//techs is areday defined DB collections

module.exports = mongoose.model('techs', userSchema);
