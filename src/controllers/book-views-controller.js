const mongoose = require('mongoose');
const BookView = mongoose.model('Book')

exports.showViews = async (req, res) => {
    try{
        const get = await BookView.findOne({});
        return res.json(get);
    }catch(e){
        return res.status(500).send({error: 'Nao foi possivel acessar views do livro.'})
    }
};
exports.addView = async (req, res) => {
    try{
        const put = await BookView.findOne({'_id': req.body._id});
        
        put.views++;

        await put.save();
        return res.status(200).send({message: 'View adicionada'});
    }catch(e){
        return res.status(500).send({error: 'Nao foi possivel adicionar views'});
    }
};
