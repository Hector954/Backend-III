const express = require('express');
const router = express.Router();
const {
  getProduct,
  getProductById,
  postProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productControllers');

router.get(`/`, getProduct);
router.get(`/:id`, getProductById);
router.post(`/`, postProduct);
router.put(`/:id`, updateProduct);
router.delete(`/:id`, deleteProduct);

module.exports = router;