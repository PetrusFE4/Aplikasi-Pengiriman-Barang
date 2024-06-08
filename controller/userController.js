const bcrypt = require('bcrypt'); //untuk hash
const jwt = require('jsonwebtoken'); //untuk token
const user  = require('../models/user'); //import model user

exports.registeUser = async (req, res) => {
    const {fullname, username, password, email, phone, address} = req.body;
    const hashedPass = await bcrypt.hash(password, 10); //hass password
    const registerDate = new Date();

    try{
        const newUser = {
            fullname,
            username,
            password: hashedPass,
            email,
            phone,
            address,
            registerDate,
            role: 'user'
        };

        await user.create(newUser);
        res.status(201).json({messege: 'User registered succesfully'});
    } catch(error) {
        res.status(500).json({messege: 'Error registering user'});
    }
};


exports.registerAdmin = async (req, res) => {
    const {fullname, username, password, email, phone, address} = req.body;
    const hashedPass = await bcrypt.hash(password, 10); //hass password
    const registerDate = new Date();

    try {
        const newAdmin = {
            fullname,
            username,
            password: hashedPass,
            email,
            phone,
            address,
            registerDate,
            role: 'admin'
        };
        
        await user.create(newAdmin);
        res.status(201).json({messege: 'Admin registered succesfully'});
    } catch(error) {
        res.status(500).json({messege: 'Error registering admin'});
    }
};

exports.login= async (req, res) => {
    const {username, password} = req.body;

    try{
        const user = await user.findOne({username});
        if(!user){
            return res.status(401).json({error: 'Invalid usernaame or password'});
        }

        const passwordValidate = await bcrypt.compare(password, user.password);
        if(!passwordValidate){
            return res.status(401).json({error: 'Invalid usernaame or password'});
        }

        const token = jwt.sign({userId: user.userID, role: user.role}, 'secretKey', {expiresIn: '1h'});
    } catch(error) {
        res.status(500).json({error: 'Failed to login'});
    }
};