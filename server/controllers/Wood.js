const Wood = require('../models/Wood');

exports.save = async (req, res) => {
  try {
    const wood = new Wood(req.body);
    await wood.save();
    res.status(201).json({ success: true, wood });
  } catch (e) {
    res.status(422).json({ success: false, error: e });
  }
};

exports.getAll = async (req, res) => {
  try {
    const woods = await Wood.find({});
    res.status(200).json({ success: true, woods });
  } catch (e) {
    res.status(500).json({ success: false, error: e });
  }
};
