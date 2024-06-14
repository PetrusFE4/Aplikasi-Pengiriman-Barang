const Admin = require('../models/adminModels');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async(req, res) => {
    const { fullname, username, password, email, phone, address } = req.body;
    const useRole = 'admin'; //sebagai default 'user'
    
    try{
        //jika user sudah ada
        //12-Juni 2024
        //time: 3.10 PM
        const usernameReady = await new Promise((resolve, reject)=>{
            Admin.findUsernameAdmin(username, (err, result) => {
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
        console.log("Role: ", useRole)
        await new Promise((resolve, reject)=>{
            Admin.create({fullname, username, password, email, phone, address, role: 'admin'}, (err, result)=> {
                if(err) return reject(err);
                resolve(result);
            });

        });

        return res.status(201).json({message: 'Pendaftaran Admin Sukses'});
    } catch(error){
        console.error("Terjadi Kesalahan ketika pendaftaran", error);
        return res.status(500).json({ message: 'Error Register' });
    }
};


exports.logout = (req, res) => {
    res.status(200).json({message: 'Logout!!!'});
}