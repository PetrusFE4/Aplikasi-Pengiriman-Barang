module.exports = (roles) => {
    return async (req, res, next) => {
        const userRole = req.user.role; //get peran dari token
        if(!roles.includes(userRole)) {
            return res.sendStatus(403); // peran tidak sesuai
        }
        next();
    };
}