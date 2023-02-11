const fs = require('fs')

function getTodosLivros(){
    return JSON.parse(fs.readFileSync("livros.json"))
}
function getLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id === id)
    return livroFiltrado
}

function insereLivro(novoLivro){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const novosLivrosLista = [...livros, novoLivro]
    fs.writeFileSync("livros.json", JSON.stringify(novosLivrosLista))
}

function modificaLivro(modificacoes, id){
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"))
    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id)

    const conteudoMudado = { ...livrosAtuais[indiceModificado], ...modificacoes }

    livrosAtuais[indiceModificado] = conteudoMudado

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais))
}

function deletaLivroPorId(id){
    const livros = JSON.parse(fs.readFileSync("livros.json"))
    const livroFiltrado = livros.filter(livro => livro.id !== id)
    fs.writeFileSync('livros.json', JSON.stringify(livroFiltrado))
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro,
    deletaLivroPorId
}