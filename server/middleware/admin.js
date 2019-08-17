const admin = (req, res, next) => {
  if (req.user.role === 0) {
    return res.status(403).json({ message: 'you are not allowed, get out now.' });
  }
  next();
};

module.exports = { admin };
