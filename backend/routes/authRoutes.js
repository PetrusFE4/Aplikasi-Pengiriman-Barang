const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const adminController = require('../controller/adminController');
const authToken = require('../middleware/authentications')

//const status
const {updateStatus, trackOrder} = require('../controller/statusController');

const hitungOngkir = require('../controller/ongkirController');
const buatPesanan = require('../controller/orderController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout',  authToken, authController.logout);
router.post('/registerAdmin', adminController.registerAdmin);
router.post('/cek-ongkir', hitungOngkir);
router.post('/order', buatPesanan);

router.get('/status', updateStatus);
router.get('/track/:order_id', trackOrder );

module.exports = router;