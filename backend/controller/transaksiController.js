const db = require('../config/db');

//tabel transaksi
const listOrders = async (req, res)=>{
    try{
        const query = 'SELECT * FROM tbl_orders';
        db.query(query, (err, results)=>{
            if(err){
                console.error(err);
                return res.status(500).json({message: "Error fetching orders"});
            }
            res.status(200).json({orders: results});
        })
    }catch(err){
        console.error(err);
        res.status(500).json({message: "Fetch Error"});
    }
};

module.exports = listOrders;