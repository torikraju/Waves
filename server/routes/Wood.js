const express = require('express');

const woodController = require('../controllers/Wood');
const { auth } = require('../middleware/auth');
const { admin } = require('../middleware/admin');

const router = express.Router();

router.post('/save', auth, admin, woodController.save);

router.get('/getAll', woodController.getAll);

module.exports = router;
