const db = require('../config/db');
const bcrypt = require('bcrypt');

const User = {
    create: async (userData, callback) => {
        const {fullname, username, password, email, phone, address, role} = userData;
        const hashedPassword = await bcrypt.hash(password, 10);
        const sql =`INSERT INTO tbl_users(fullname, username, password, email, phone, address, registrationDate, role) VALUES (?, ?, ?, ?, ?, ?, NOW(), ?)`;
        db.query(sql, [fullname, username, hashedPassword, email, phone, address, role], callback);
    },



    findUsername: (username, callback) => {
        const sql = `SELECT * FROM tbl_users WHERE username = ?`;
        db.query(sql, [username], callback);
    }

};

module.exports = User;