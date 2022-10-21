const express = require('express');
const router = express.Router();
const {
  getBranch,
  getBranchById,
  postBranch,
  updateBranch,
  deleteBranch,
} = require('../controllers/branchControllers');

router.get(`/`, getBranch);
router.get(`/:id`, getBranchById);
router.post(`/`, postBranch);
router.put(`/:id`, updateBranch);
router.delete(`/:id`, deleteBranch);

module.exports = router;
