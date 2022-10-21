const express = require('express');
const router = express.Router();
const {
  getPayMethod,
  getPayMethodById,
  postPayMethod,
  updatePayMethod,
  deletePayMethod,
} = require('../controllers/payMethodControllers');

router.get(`/`, getPayMethod);
router.get(`/:id`, getPayMethodById);
router.post(`/`, postPayMethod);
router.put(`/:id`, updatePayMethod);
router.delete(`/:id`, deletePayMethod);

module.exports = router;