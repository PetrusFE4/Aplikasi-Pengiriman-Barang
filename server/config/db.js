let mysql = require('mysql2');

//konfigurasi koneksi ke database

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'aplikasi-pengiriman-barang'
});

//untuk mengecek database berjalan dengan aman atau tidak
con.connect(function(error){cd 
    if(!!error){
        console.log(error);
    } else {
        console.log('Connected to the Delivery App');
    }
});

module.exports = con;