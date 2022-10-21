const express = require('express');
const router = express.Router();
const {
  getSale,
  getSaleById,
  postSale,
  updateSale,
  deleteSale,
} = require('../controllers/saleControllers');

router.get(`/`, getSale);
router.get(`/:id`, getSaleById);
router.post(`/`, postSale);
router.put(`/:id`, updateSale);
router.delete(`/:id`, deleteSale);

module.exports = router;
