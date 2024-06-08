const jwt = require('jsonwebtoken');

module.exports =(req, res, next) => {
    const auth = req.headers['authorization'];
    const token = auth && auth.spilt(' ')[1];

    if(!token) {
        return res.sendStatus(401); //no token
    }

    jwt.verify(token, 'sekretKey', (err, user)=>{
        if(err) {
            return res.sendStatus(403); //token invalid
        }

        req.user = user; //simpan paylaod ke req
        next();
    });
}