const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-users-controller');
const login = require('../config/login')

router.post('/login', adminController.login);
router.post('/create', login,  adminController.createAdminUser);
router.put('/', adminController.verifyToken);

module.exports = router;
