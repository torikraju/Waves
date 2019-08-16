const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.cookies.w_auth;
    const user = await User.findByToken(token);
    if (!user) {
      return res.status(401).json({ isAuth: false, error: true });
    }
    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    console.log(e);
    if (e.name === 'JsonWebTokenError') return res.status(401).json({ error: e });
    res.status(500).json({ error: e });
  }
};


module.exports = { auth };
