const bcrypt = require('bcryptjs');

const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(200).json({ success: true });
  } catch (e) {
    res.status(422).json({ success: false, error: e });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ success: false, message: 'A user with this email could not be found' });
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) return res.status(401).json({ success: false, message: 'Invalid username or password' });
    await user.generateToken((err, token) => {
      if (err) return res.status(401).json({ message: 'Invalid username or password' });
      res.cookie('w_auth', token).status(200).json({ success: true });
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

exports.auth = async (req, res) => {
  res.status(200).json({
    isAdmin: req.user.role !== 0,
    isAuth: true,
    email: req.user.email,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    role: req.user.role,
    cart: req.user.cart,
    history: req.user.history,
  });
};

exports.logout = async (req, res) => {
  try {
    await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });
    res.status(200).json({ success: true });
  } catch (e) {
    console.log(e);
    res.status(500).json({ success: false, error: e });
  }
};
