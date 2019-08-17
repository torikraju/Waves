const mongoose = require('mongoose');

const { ObjectId } = mongoose.Types;

const Product = require('../models/Products');

exports.save = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ success: true, product });
  } catch (e) {
    res.status(422).json({ success: false, error: e });
  }
};

exports.getById = async (req, res) => {
  try {
    const { type } = req.query;
    let items = req.query.id;

    if (type === 'array') {
      const ids = req.query.id.split(',');
      items = [];
      items = ids.map(el => ObjectId(el));
    }
    const products = await Product.find({ _id: { $in: items } })
      .populate('brand')
      .populate('wood')
      .exec();
    res.status(200).json({ success: true, products });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};

exports.getByQuery = async (req, res) => {
  try {
    const order = req.query.order || 'asc';
    const sortBy = req.query.sortBy || '_id';
    const limit = parseInt(req.query.limit, 100) || 100;

    const products = await Product.find()
      .populate('brand')
      .populate('wood')
      .sort([[sortBy, order]])
      .limit(limit)
      .exec();
    res.status(200).json({ success: true, products });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
