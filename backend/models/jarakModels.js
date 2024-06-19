const db = require('../config/db');

const getJarak = (origin, destination) => {
    return new Promise((resolve, reject) => {
        const query = `SELECT distance_km FROM tbl_distances WHERE origin = ? AND destination = ? LIMIT 1`;
        db.query(query, [origin, destination], (err, results) => {
            if(err) reject(err);
            if(results.length > 0) {
                resolve(results[0].distance_km);
            } else{
                resolve(null);
            }
        })
    })
}

module.exports = getJarak;