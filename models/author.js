const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
  firstName: { type: String, required: true, maxlength: 100 },
  familyName: { type: String, required: true, maxlength: 100 },
  dateOfBirth: { type: Date },
  dateOfDeath: { type: Date }
});

module.exports = mongoose.model('Author', authorSchema);