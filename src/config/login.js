const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
    try{
        const decode = jwt.verify(req.body.token, process.env.SECRET);
        req.usuario = decode;
        next()
    }catch(e){
        return res.status(401).send({message: 'Falha na autorização'})
    }
}
