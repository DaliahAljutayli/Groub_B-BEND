const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const InfoSchema = new Schema({
  Name: {
    type: String,
    required: true
  },
  Univercity: {
    type: String,
    required: true
  },
  Major: {
    type: String,
    required: true
  },
  File: {
    type: Object
  }
});

module.exports = Info = mongoose.model('info', InfoSchema);