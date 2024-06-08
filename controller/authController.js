const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    const { fullname, username, password, email, phone, address, role } = req.body;
    User.create({fullname, username, password, email, phone, address, role}, (err, result)=> {
        if(err){
           return res.status(400).json({message: 'Failed to register user'});
        }
             return      res.status(201).json({message: 'User registered  succesfully'});
    });
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    User.findUsername(username, async (err, result) => {
        if(err || result.length === 0 ){
           return res.status(401).json({message: 'Invalid username or password'});
        }

        const user = result[0];
        const passwordValidate = await bcrypt.compare(password, user.password);
        if(!passwordValidate){
           return res.status(401).json({message: 'Invalid username or password'});
        }

        const token = jwt.sign({userID: user.userID, role: user.role}, 'secretKey', {expiresIn: '1h'});
        res.status(200).json({message: 'Authentication succesfully', token});
    });
};