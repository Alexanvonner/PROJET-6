const mongoose = require('mongoose');

const Schema = mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: {type: Number , required: true},
  like: {type:Number, default:0},
  dislike:{type:Number, default:0},
  userLiked :{type: Array},
  userDisliked:{type: Array},
});

module.exports = mongoose.model('Sauces', Schema);