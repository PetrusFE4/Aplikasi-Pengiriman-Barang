let mysql = require("mysql2");

//konfigurasi koneksi ke database

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root", //punyaku pake password
  database: "aplikasi-pengiriman-barang",
});

// let con = mysql.createConnection({
//   host: "educalab.id",
//   user: "Ak8iyyZg5WSBigfF",
//   password: "	LV6cXgaRUC896THY", //punyaku pake password
//   database: "peWFmpBkhAU8SvpZ",
//   port: 3307
// });

//untuk mengecek database berjalan dengan aman atau tidak
con.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("Connected to the Delivery App");
  }
});

module.exports = con;