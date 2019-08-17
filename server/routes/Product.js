const express = require('express');

const productController = require('../controllers/Product');
const { auth } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

const router = express.Router();

router.post('/add', auth, admin, productController.save);

router.get('/getById', productController.getById);

router.get('/getByQuery', productController.getByQuery);

router.get('/getBySell', productController.getById);


module.exports = router;
