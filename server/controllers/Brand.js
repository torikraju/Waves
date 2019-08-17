const Brand = require('../models/Brand');

exports.save = async (req, res) => {
  try {
    const brand = new Brand(req.body);
    await brand.save();
    res.status(201).json({ success: true, brand });
  } catch (e) {
    res.status(422).json({ success: false, error: e });
  }
};

exports.getAll = async (req, res) => {
  try {
    const brands = await Brand.find({});
    res.status(200).json({ success: true, brands });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
