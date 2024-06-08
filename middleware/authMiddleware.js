const jwt = require('jsonwebtoken');

exports.tokenVerified =(req, res, next) => {
    const token = req.headers['authorization'];
    // const token = auth && auth.spilt(' ')[1];

    if(!token) {
        return res.status(403).json({message: 'No token provied'}); //no token
    }

    jwt.verify(token, 'sekretKey', (err, decoded)=>{
        if(err) {
            return res.status(500).json({message: 'Failed authenticate token'}); //token invalid
        }

        req.userID = decoded.userID; //simpan paylaod ke req
        req.role = decoded.role;
        next();
    });
};