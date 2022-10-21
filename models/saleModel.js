//Ventas (productos/total/sucursal/usuario/método de pago) Metodos: L/C/D

const mongoose = require('mongoose');

const saleSchema = mongoose.Schema({
  products: {
    type: String,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  user: {
    type: String,
    required: true,
  },
  payMethod: {
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

module.exports = mongoose.model('Sale', saleSchema);
