const express = require('express');
const router = express.Router();
const {
  getUser,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
  postUserLogin,
} = require('../controllers/UserControllers.js');

router.get(`/`, getUser);
router.get(`/:id`, getUserById);
router.post(`/register`, postUser);
router.put(`/:id`, updateUser);
router.delete(`/:id`, deleteUser);
router.post(`/login`, postUserLogin);

module.exports = router;