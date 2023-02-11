/*
* Links Importantes
-> Artigo sobre HTTP Alura: https://www.alura.com.br/artigos/desmistificando-o-protocolo-http-parte-1#:~:text=HTTP%20é%20um%20protocolo%2C%20uma,nome%20Hyper%20Text%20Transport%20Protcolo
*/

const express = require('express')
const rotaLivro = require('./rotas/livro')
const app = express()

app.use(express.json())
app.use('/livros', rotaLivro)

app.get('/', (req, res)=>{
    try{
        res.send('Hello, world')
    }catch(err){
        res.status(500)
        res.send('Error: ' + err.message)
    }
})


app.listen(8000, ()=>console.log('listening on http://localhost:8000')) 