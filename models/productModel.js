const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  sku: {
    type: String,
    required: true,
    unique: true,
  },
  countInStock: {
    type: Number,
    required: true,
  },
  sucursal: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
  image: {
    type: String,
    required: true,
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

module.exports = mongoose.model('Product', productSchema);
