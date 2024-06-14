const jwt = require('jsonwebtoken');

const otentikasiToken = (req, res, next) =>{
    const auhtHeader = req.headers['authorization'];
    const token = auhtHeader && auhtHeader.split(' ')[1];

    if(!token) return res.sendStatus(401);

    jwt.verify(token, 'secretKey', (err, user)=>{
        if(err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

module.exports = otentikasiToken;