const db = require('../config/db');

const hitungTarif = ()=>{
    return new Promise((resolve, reject)=>{
        const query = 'SELECT rate_per_km FROM tbl_tarif LIMIT 1';
        db.query(query, (err, results) =>{
            if(err) reject(err);
            if(results.length > 0) {
                resolve(results[0].rate_per_km);
            } else {
                resolve(null);
            }
        });
    });
};

module.exports = hitungTarif;