const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, deletaLivroPorId } = require('../servicos/livros')

function getLivros(req, res){
    try{
        res.send(getTodosLivros())
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    } 
}

function getLivro(req, res){
    try{
        const id = req.params.id
        const livro = getLivroPorId(id)
        res.send(livro)
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    } 
}

function postLivro(req, res){
    try{
        const livroNovo = req.body
        insereLivro(livroNovo)
        res.status(201)
        res.send("livro inserido com sucesso")
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    }
}

function patchLivro(req, res){
    try{
        const id = req.params.id
        const body = req.body

        modificaLivro(body, id)
        res.send('item modificado com sucesso')
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    }
}

function deleteLivro(req, res){
    try{
        const id = req.params.id
        deletaLivroPorId(id)
        res.send('Livro deletado com sucesso')
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    }
}

module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivro
}