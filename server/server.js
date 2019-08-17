const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

require('dotenv').config();
const { startUpToDo } = require('./util/StartUp');

const userRouter = require('./routes/User');
const brandRouter = require('./routes/Brand');
const woodRouter = require('./routes/Wood');
const productRouter = require('./routes/Product');

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
app.use('/api/brand', brandRouter);
app.use('/api/wood', woodRouter);
app.use('/api/product', productRouter);


mongoose
  .set('useCreateIndex', true)
  .connect(process.env.DATABASE, { useNewUrlParser: true, useFindAndModify: false })
  .then(() => app.listen(port, () => startUpToDo(port)))
  .catch((e) => console.log(e));
