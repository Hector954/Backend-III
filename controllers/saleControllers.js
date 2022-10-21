const Sale = require('../models/saleModel');

const getSale = async (req, res) => {
  try {
    const SaleList = await Sale.find();
    if (!SaleList) {
      res.status(500).json({ success: false });
    }
    res.send(SaleList);
  } catch (err) {
   res.send(err.message)
  }
};

const getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id);
    if (!sale) {
      res.status(500).json({ success: false });
    }
    res.send(sale);
  } catch (err) {
   res.send(err.message)
  }
};

const postSale = async (req, res) => {
  try {
    const sale = await Sale.create({
      products: req.body.products,
      total: req.body.total,
      user: req.body.user,
      payMethod: req.body.payMethod,
    });
    sale.save();
    res.send(sale);
  } catch (err) {
   res.send(err.message)
  }
};

const updateSale = async (req, res) => {
  try {
    const sale = await Sale.findByIdAndUpdate(
      req.params.id,
      {
        products: req.body.products,
        total: req.body.total,
        user: req.body.user,
        payMethod: req.body.payMethod,
      },
      { new: true }
    );
    if (!sale) {
      res.status(500).json({ success: false });
    }
    res.send(sale);
  } catch (err) {
   res.send(err.message)
  }
};

const deleteSale = async (req, res) => {
  try {
    const sale = await Sale.findByIdAndRemove(req.params.id);
    if (!sale) {
      res.status(500).json({ success: false });
    }
    res.send(sale);
  } catch (err) {
   res.send(err.message)
  }
};

module.exports = {
  getSale,
  getSaleById,
  postSale,
  updateSale,
  deleteSale,
};
