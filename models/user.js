const db = require('../config/db');
const bcrypt = require('bcrypt');

class user{
    static async create(newUser){
        const [result] = await db.execute(
            `INSERT INTO tbl_users SET(fullname, username, password, email, phone, address, registrationDate, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
            [newUser.fullname, newUser.username, newUser.password, newUser.email, newUser.email, newUser.phone, newUser.address, newUser.registrationDate, newUser.role]
        );
        return result;
    }

    static async findUsername(username){
        const [result] =await db.execute(
            `SELECT * FROM tbl_users WHERE username = ?`, [username]
        );
        return rows(0);
    }

    static async findEmail(email) {
        const [result] = await db.execute(
            `SELECT * FROM tbl_users WHERE email = ?`, [email]
        );
        return row[0];
    }

    static async findId(userID) {
        const [result] = await db.execute(
            `SELECT * FROM tbl_users WHERE id = ?`, [userID]
        );
        return row[0];
    }
}

module.exports = user;

// //import koneksi
// const conection =require('../config/db');
// const bcrypt = require('bcrypt');

// //fungsi register dan login
// const user ={  async register(username, password, email, phone, address){
//         //validate register


//         //hash
//         const hashedPassword = await bcrypt.hash(password, 10);

//         //insert data pengguna baru ke database
//         const sql = 'INSERT INTO tbl_users(username, password, email, phone, address, userType, adminType, registrationDate) VALUES (?, ?, ?, ?, ?, ?, ?, ?';
//         const values = [username, hashedPassword, email, phone, address, 'user', 'user', new Date().toISOString()];

//         await conection.query(sql, values, (err, result) => {
//             if(err){
//                 console.error('Error Registering User: ', err);
//                 return;
//             }
//             console.log('User Registered successfully');
//         });
//     },

//     async login(username, password) {
//         //search username berdasarkan username
//         const sql = 'SELECT *FROM tbls_users WHERE username = ?';
//         const values = [username];

//         await conection.query(sql, values, async (err, result) =>{
//             if(err) {
//                 console.error('Error login', err);
//                 return;
//             }

//             if(result.length === 0) {
//                 console.log('Username tidak ditemukan');
//                 return;
//             }

//             const user = result[0];

//             //validate password
//             const validatePass = await bcrypt.compare(password, user.password);

//             if(!validatePass) {
//                 console.log('Invalid your password');
//                 return;
//             }

//             //login succes
//             console.log('login success');
//         });
//     }
// };