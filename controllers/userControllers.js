const User = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const getUser = async (req, res) => {
  try {
    const UserList = await User.find().select('-password');
    if (!UserList) {
      res.status(500).json({ success: false });
    }
    res.send(UserList);
  } catch (err) {
    res.send(err.message);
  }
};

const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) {
      res.status(500).json({ success: false });
    }
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
};

const postUser = async (req, res) => {
  try {
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 10),
      sucursal: req.body.sucursal,
      isAdmin: req.body.isAdmin,
    });
    user.save();
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        sucursal: req.body.sucursal,
        isAdmin: req.body.isAdmin,
      },
      { new: true }
    );
    if (!user) {
      res.status(500).json({ success: false });
    }
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params.id);
    if (!user) {
      res.status(500).json({ success: false });
    }
    res.send(user);
  } catch (err) {
    res.send(err.message);
  }
};

const postUserLogin = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    const secret = process.env.SECRET_KEY;
    if (!user) {
      return res.status(400).send('User not found');
    }

    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        {
          userId: user.id,
          isAdmin: user.isAdmin,
        },
        secret,
        { expiresIn: '1d' }
      );
      res.status(200).send({ user: user.email, token: token });
    } else {
      res.status(400).send('Password is wrong');
    }
  } catch (err) {
    res.send(err.message);
  }
};

module.exports = {
  getUser,
  getUserById,
  postUser,
  updateUser,
  deleteUser,
  postUserLogin,
};
