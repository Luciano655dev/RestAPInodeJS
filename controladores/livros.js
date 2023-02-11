const { getTodosLivros } = require('../servicos/livros')

function getLivros(req, res){
    try{
        const livros = getTodosLivros
        res.send(livros)
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    } 
}

module.exports = {
    getLivros
}