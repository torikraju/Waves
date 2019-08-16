const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const userRouter = require('./routes/User');

const app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use('/api/user', userRouter);


mongoose
  .set('useCreateIndex', true)
  .connect(process.env.DATABASE, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => app.listen(port, () => console.log(`Example app listening on port ${port}!`)))
  .catch((e) => console.log(e));
