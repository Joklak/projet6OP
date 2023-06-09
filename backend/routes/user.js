const express = require('express');
const router = express.Router();

const userCtrl = require('../controllers/user');
const passwordValid = require('../middleware/passwordIsValid');
router.post('/signup', passwordValid, userCtrl.signup);
router.post('/login', userCtrl.login);

module.exports = router;