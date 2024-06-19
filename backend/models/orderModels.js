const db = require('../config/db');

const buatPesanan = (orderData)=>{
    return new Promise((resolve, reject)=>{
        const query = `
        INSERT INTO tbl_orders( 
        order_id,
        nama_pengirim,
        kota_asal, kodePos_pengirim,
        nama_penerima,
        kota_penerima,
        kodePos_penerima,
        namaBarang,
        berat,
        created_at
        ) VALUES (?,?,?,?,?,?,?,?,?, NOW())`;
        const values = 
            [
                orderData.order_id,
                orderData.nama_pengirim,
                orderData.kota_asal,
                orderData.kodePos_pengirim,
                orderData.nama_penerima,
                orderData.kota_penerima,
                orderData.kodePos_penerima,
                orderData.namaBarang,
                orderData.berat
            ];
            db.query(query, values, (err, results)=>{
                if(err) 
                    reject(err);
                    
                resolve(results.insertId);
            });
    });
};

module.exports = buatPesanan;