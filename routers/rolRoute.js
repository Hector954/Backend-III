const express = require('express');
const router = express.Router();
const {
  getRol,
  getRolById,
  postRol,
  updateRol,
  deleteRol,
} = require('../controllers/rolControllers.js');

router.get(`/`, getRol);
router.get(`/:id`, getRolById);
router.post(`/`, postRol);
router.put(`/:id`, updateRol);
router.delete(`/:id`, deleteRol);

module.exports = router;