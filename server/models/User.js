const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: 1,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  firstName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 100,
  },
  cart: {
    type: Array,
    default: [],
  },
  history: {
    type: Array,
    default: [],
  },
  role: {
    type: Number,
    default: 0, // 0 for user and 1 for admin
  },
  token: {
    type: String,
  },
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      // eslint-disable-next-line radix
      this.password = await bcrypt.hash(this.password, parseInt(process.env.SALT));
    }
    next();
  } catch (e) {
    console.log('Error occur UserSchema: PreSave');
  }
});

userSchema.methods.generateToken = async function (cb) {
  try {
    const token = jwt.sign({
      email: this.email,
      userId: this._id.toString(),
    }, process.env.JWT_SECRET_KEY, { expiresIn: process.env.JWT_TOKEN_EXPIRES_IN });
    this.token = token;
    await this.save();
    return cb(null, token);
  } catch (e) {
    cb(e);
  }
};

userSchema.statics.findByToken = async function (token) {
  // eslint-disable-next-line no-useless-catch
  try {
    const decode = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    return await this.findOne({ _id: decode.userId, token });
  } catch (e) {
    throw e;
  }
};


module.exports = mongoose.model('User', userSchema);
