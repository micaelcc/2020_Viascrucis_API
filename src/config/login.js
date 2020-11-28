const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.SECRET);
        req.usuario = decode;
        next()
    }catch(e){
        return res.status(401).send({message: 'Falha na autorização'})
    }
}