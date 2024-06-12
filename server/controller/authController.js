const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = async(req, res) => {
    const { fullname, username, password, email, phone, address } = req.body;
    const useRole = 'user'; //sebagai default 'user'
    
    try{
        //jika user sudah ada
        //12-Juni 2024
        //time: 12.39 AM
        const usernameReady = await new Promise((resolve, reject)=>{
            User.findUsername(username, (err, result) => {
                if(err) return reject(err);
                resolve(result);
            });
        });

        if(usernameReady.length > 0) {
            return res.status(400).json({ message: 'username sudah terdaftar' });
        }

        //jika username belum ada, hass password
        const hassPaass = await bcrypt.hash(password, 10);

        //bikin username baru
        await new Promise((resolve, reject)=>{
            User.create({fullname, username, password, email, phone, address, role: useRole}, (err, result)=> {
                if(err) return reject(err);
                resolve(result);
            });

        });

        return res.status(201).json({message: 'Selamat!!! Pendaftaran Sukses'});
    } catch(error){
        console.error("Terjadi Kesalahan ketika pendaftaran", error);
        return res.status(500).json({ message: 'Error Register' });
    }
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
        
        if(user.role === 'admin') {
            return res.status(200).json({message: 'Login Admin!!!', token, redirect: 'admin'})
        } else {
            return res.status(200).json({message: 'Login', token, redirect: 'user'});
        }
    });
};

exports.logout = (req, res) => {
    const role = req.user.role;
    if(role === 'admin') {
       return res.status(200).json({message: 'Logout admin sukses'});
    } else {
       return res.status(200).json({message: 'Logout!!!'});
    }
    
}