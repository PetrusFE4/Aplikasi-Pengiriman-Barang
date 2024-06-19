const buatPesanan = require('../models/orderModels');
const hitungTarif = require('../models/tarifModels');
const getJarak = require('../models/jarakModels');

//fungsi untuk resi
const generateOrderID = () => {
    const prefix = "FEX";
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2,'0');
    const randomNumber = Math.floor(1000 + Math.random() * 9000);

    return `${prefix}${year}${month}${day}${randomNumber}`;

};
    const pesananBaru = async (req, res) =>{
        try{
            const {
                 nama_pengirim, kota_asal, kodePos_pengirim,    nama_penerima,    kota_penerima,    kodePos_penerima,    namaBarang, berat
            } = req.body;

            //debug
            // console.log("Request Body",req.body)

            if(!nama_pengirim || !kota_asal || !kodePos_pengirim || !nama_penerima || !kota_penerima || !kodePos_penerima || !namaBarang || !berat){
                return res.status(400).json({message: "Data tidak lengkap"});
            }

            //hitungJarak
            const distance = await getJarak(kota_asal, kota_penerima);
            // console.log("Request Jarak", distance)
            if(distance === null){
                return res.status(404).json({message: "Kota tidak ditemukan"});
            }

            const kilometer = await hitungTarif();
            // console.log("Request KM", kilometer)

            const cost = berat * kilometer * distance;
            // console.log("Cost", cost)

            const order_id = generateOrderID();
            // console.log("Request order_id", order_id)
            const orderData = {
                order_id,
                nama_pengirim,
                kota_asal,
                kodePos_pengirim,
                nama_penerima,
                kota_penerima,
                kodePos_penerima,
                namaBarang,
                berat, 
                cost
            };

            // console.log("Request Data", orderData)

            const orderId = await buatPesanan(orderData);
            // console.log("orderID", orderId)

            
                res.status(201).json({
                    message: "Pesanan berhasil dibuat",
                    order_id,
                    cost,
                    nama_pengirim,
                    kota_asal,
                    kodePos_pengirim,
                    nama_penerima,
                    kota_penerima,
                    kodePos_penerima,
                    namaBarang,
                    berat
                });

            }catch(err){
                console.error(err);
                res.status(500).json({
                    error: "Internal server error"
                });
            }
        }; 
    


module.exports = pesananBaru;