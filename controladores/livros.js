function getLivros(req, res){
    try{
        res.send('Hello, world')
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    }
}

module.exports = {
    getLivros
}