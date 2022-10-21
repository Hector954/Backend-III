const Rol = require('../models/RolModel');

const getRol = async (req, res) => {
  try {
    const RolList = await Rol.find();
    if (!RolList) {
      res.status(500).json({ success: false });
    }
    res.send(RolList);
  } catch (err) {
    res.send(err.message)
  }
};

const getRolById = async (req, res) => {
  try {
    const rol = await Rol.findById(req.params.id);
    if (!rol) {
      res.status(500).json({ success: false });
    }
    res.send(rol);
  } catch (err) {
    res.send(err.message)
  }
};

const postRol = async (req, res) => {
  try {
    const rol = await Rol.create({
      name: req.body.name,
      code: req.body.code,
    });
    rol.save();
    res.send(rol);
  } catch (err) {
    res.send(err.message)
  }
};

const updateRol = async (req, res) => {
  try {
    const rol = await Rol.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        code: req.body.code,
      },
      { new: true }
    );
    if (!rol) {
      res.status(500).json({ success: false });
    }
    res.send(rol);
  } catch (err) {
    res.send(err.message)
  }
};

const deleteRol = async (req, res) => {
  try {
    const rol = await Rol.findByIdAndRemove(req.params.id);
    if (!rol) {
      res.status(500).json({ success: false });
    }
    res.send(rol);
  } catch (err) {
    res.send(err.message)
  }
};

module.exports = {
  getRol,
  getRolById,
  postRol,
  updateRol,
  deleteRol,
};
