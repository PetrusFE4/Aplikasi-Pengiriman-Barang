const db = require('../config/db');

//fungsi updte
const updateStatus = async (req, res) => {
    try {
        const {order_id, status} = req.body;

        //input
        if(!order_id || !status){
            return res.status(400).json({message: 'Please fill in all fields'});
        }

        //status diterima
        const validStatus = ['on progress', 'pending', 'delivered'];
        if(!validStatus.includes(status)) {
            return res.status(400).json({message: 'Invalid status'});
        }

        //update stataus di db
        const query = 'UPDATE tbl_orders SET status = ? WHERE order_id= ?';
        db.query(query, [status, order_id], (err, results)=>{
            if(err){
                console.error(err);
                return res.status(500).json({message: 'Error updating status'});
            }
            
            if(results.affectedRows===0){
                return res.status(404).json({message: 'Order not found'});
            }

            res.status(200).json({message: 'Pesanan Berhasil Di Update'});
        });
    } catch(err){
        console.error(err);
        res.status(500).json({message: 'Error updating status'});
    }
};

//fungsi track
const trackOrder = async(req, res) => {
    try{
        const {order_id} = req.params;
        //validasi input
        if(!order_id){
            return res.status(400).json({message: 'Please fill in all fields'});
        }

        //ambil data pesanan dari db
        const query = 'SELECT * FROM tbl_orders WHERE order_id = ?';
        db.query(query, [order_id], (err, results)=>{
            if(err){
                console.error(err);
                return res.status(500).json({message: 'Error fetching order'});
            }
            if(results.length === 0 ) {
                return res.status(404).json({message: 'Order not found'});
            }
            res.status(200).json({order: results[0]});
        });
    }catch(err){
        console.error(err);
        res.status(500).json({message: 'Error fetching order'});
    }
};

module.exports = {
    updateStatus,
    trackOrder
};