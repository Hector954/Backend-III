const Branch = require('../models/branchModel');

const getBranch = async (req, res) => {
  try {
    const branchList = await Branch.find();
    if (!branchList) {
      res.status(500).json({ success: false });
    }
    res.send(branchList);
  } catch (err) {
   res.send(err.message)
  }
};

const getBranchById = async (req, res) => {
  try {
    const branch = await Branch.findById(req.params.id);
    if (!branch) {
      res.status(500).json({ success: false });
    }
    res.send(branch);
  } catch (err) {
   res.send(err.message)
  }
};

const postBranch = async (req, res) => {
  try {
    const branch = await Branch.create({
      name: req.body.name,
      code: req.body.code,
      phone: req.body.phone,
      address: req.body.address,
      city: req.body.city,
      state: req.body.state,
      getLocation: req.body.getLocation,
      status: req.body.status,
    });
    branch.save();
    res.send(branch);
  } catch (err) {
   res.send(err.message)
  }
};

const updateBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        code: req.body.code,
        phone: req.body.phone,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        getLocation: req.body.getLocation,
        status: req.body.status,
      },
      { new: true }
    );
    if (!branch) {
      res.status(500).json({ success: false });
    }
    res.send(branch);
  } catch (err) {
   res.send(err.message)
  }
};

const deleteBranch = async (req, res) => {
  try {
    const branch = await Branch.findByIdAndRemove(req.params.id);
    if (!branch) {
      res.status(500).json({ success: false });
    }
    res.send(branch);
  } catch (err) {
   res.send(err.message)
  }
};

module.exports = {
  getBranch,
  getBranchById,
  postBranch,
  updateBranch,
  deleteBranch,
};
