const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-users-controller');
const login = require('../config/login')

router.post('/login', adminController.login);
router.get('/list', login, adminController.listAdmins);
router.post('/create', login,  adminController.createAdminUser);

module.exports = router;