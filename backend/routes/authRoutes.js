const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const adminController = require('../controller/adminController');
const authToken = require('../middleware/authentications')

const hitungOngkir = require('../controller/ongkirController');
const buatPesanan = require('../controller/orderController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout',  authToken, authController.logout);
router.post('/registerAdmin', adminController.registerAdmin);
router.post('/cek-ongkir', hitungOngkir);
router.post('/order', buatPesanan);

module.exports = router;