const mongoose = require('mongoose');

const { Schema } = mongoose;

const woodSchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: 1,
    maxlength: 100,
  },
}, { timestamps: true });

module.exports = mongoose.model('Wood', woodSchema);
