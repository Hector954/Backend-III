const mongoose = require('mongoose');

const payMethodSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  create_at: {
    type: Date,
    default: Date.now,
  },
  update_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('payMetod', payMethodSchema);
