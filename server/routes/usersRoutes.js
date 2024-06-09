const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const auth = require('../middleware/auth');
const roleAuth = require('../middleware/roleAuth');

//routes registrasi user dan admin
router.post('/register/user', userController.registeUser);
router.post('/register/admin', userController.registerAdmin);

//routes login
router.post('/login', userController.login);

//router otentikasi dan peran admin
router.get('/admin', auth, roleAuth(['admin']), (req, res) => {
    res.json({ message: 'Welcome Admin' });
})

//routes otentikasi and peran customer
router.get('/customer', auth, roleAuth(['customer']), (req, res) => {
    res.json({ message: 'Welcome Customer' });
});

//rute untuk admin dan customer
router.get('/dasboard', auth, roleAuth(['admin', 'customer']), (req, res) => {
    res.json({ message: 'Welcome to Dasboard' });
})

//register
// router.post('/register', userController.register);

module.exports = router;