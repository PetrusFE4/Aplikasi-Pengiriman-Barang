const db = require('../config/db');
const bcrypt = require('bcrypt');

const Admin = {
    create :  async(adminData, callback) => {
        const{fullname, username, password, email, phone, address, role} = adminData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql = `INSERT INTO tbl_users(fullname, username, password, email, phone, address, registrationDate, role) VALUES (?, ?, ?, ?, ?, ?, NOW(), ?)`;
        
        db.query(sql, [fullname, username, hashedPassword, email, phone,  address, role], callback);
    } ,

    findUsernameAdmin: (username, callback) => {
        const sql = `SELECT * FROM tbl_users WHERE username = ? `;
        db.query(sql, [username], callback);
    }
}

module.exports = Admin;