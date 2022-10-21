const Product = require('../models/productModel');

const getProduct = async (req, res) => {
  try {
    const ProductList = await Product.find();
    if (!ProductList) {
      res.status(500).json({ success: false });
    }
    res.send(ProductList);
  } catch (err) {
   res.send(err.message)
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      res.status(500).json({ success: false });
    }
    res.send(product);
  } catch (err) {
   res.send(err.message)
  }
};

const postProduct = async (req, res) => {
  try {
    const product = await Product.create({
      name: req.body.name,
      sku: req.body.sku,
      countInStock: req.body.countInStock,
      sucursal: req.body.sucursal,
      price: req.body.price,
      status: req.body.status,
      image: req.body.image,
    });
    product.save();
    res.send(product);
  } catch (err) {
    res.send(err.message)
  }
};

const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        sku: req.body.sku,
        countInStock: req.body.countInStock,
        sucursal: req.body.sucursal,
        price: req.body.price,
        status: req.body.status,
        image: req.body.image,
      },
      { new: true }
    );
    if (!product) {
      res.status(500).json({ success: false });
    }
    res.send(product);
  } catch (err) {
   res.send(err.message)
  }
};

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndRemove(req.params.id);
    if (!product) {
      res.status(500).json({ success: 'Product not found' });
    }
    res.send('Product deleted');
  } catch (err) {
   res.send(err.message)
  }
};

module.exports = {
  getProduct,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
};
