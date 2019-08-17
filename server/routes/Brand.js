const express = require('express');

const brandController = require('../controllers/Brand');
const { auth } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

const router = express.Router();

router.post('/save', auth, admin, brandController.save);

router.get('/getAll', brandController.getAll);

module.exports = router;
