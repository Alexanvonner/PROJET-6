const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  img: { type: String, required: true },
  ingredient: { type: String, required: true },
  heat: {type: Number , required: true}
});

module.exports = mongoose.model('Thing', Schema);