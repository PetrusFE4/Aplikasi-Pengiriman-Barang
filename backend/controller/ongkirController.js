const hitungTarif = require('../models/tarifModels');
const getJarak = require('../models/jarakModels');

const hitungOngkir = async (req, res) => {
    try{
        const {origin, destination, weight} = req.body;
        if(!origin || !destination || weight<=0){
            return res.status(400).json({message: 'Invalid input'});
        }

        const jarak = await getJarak(origin, destination);
        if(jarak === null){
            return res.status(404).json({message: 'Jarak tidak ditemukan'});
        }      
        
        const kilometer = await hitungTarif();
        const cost = weight * kilometer * jarak;

        res.status(200).json({origin, destination, cost});
    } catch(err){
        res.status(500).json({error: "Internal server error"});
    }
}

module.exports = hitungOngkir;