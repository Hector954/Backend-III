const PayMethod = require('../models/PayMethodModel');

const getPayMethod = async (req, res) => {
  try {
    const payMethodList = await PayMethod.find();
    if (!payMethodList) {
      res.status(500).json({ success: false });
    }
    res.send(payMethodList);
  } catch (err) {
    ;res.send(err.message)
  }
};

const getPayMethodById = async (req, res) => {
  try {
    const payMethodList = await PayMethod.findById(req.params.id);
    if (!payMethodList) {
      res.status(500).json({ success: false });
    }
    res.send(payMethodList);
  } catch (err) {
    res.send(err.message);
  }
};

const postPayMethod = async (req, res) => {
  try {
    const payMethodList = await PayMethod.create({
      name: req.body.name,
      code: req.body.code,
    });
    payMethodList.save();
    res.send(payMethodList);
  } catch (err) {
    res.send(err.message);
  }
};

const updatePayMethod = async (req, res) => {
  try {
    const payMethodList = await PayMethod.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        code: req.body.code,
      },
      { new: true }
    );
    if (!payMethodList) {
      res.status(500).json({ success: false });
    }
    res.send(payMethodList);
  } catch (err) {
    res.send(err.message);
  }
};

const deletePayMethod = async (req, res) => {
  try {
    const payMethodList = await PayMethod.findByIdAndRemove(req.params.id);
    if (!payMethodList) {
      res.status(500).json({ success: false });
    }
    res.send(payMethodList);
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getPayMethod,
  getPayMethodById,
  postPayMethod,
  updatePayMethod,
  deletePayMethod,
};
