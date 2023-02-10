const { Router } = require('express')
const { getLivros } = require('../controladores/livros')
const router = Router()

router.get('/', getLivros)

router.post('/', (req, res)=>{
    res.send('Você fez uma requisiçã do tipo Post')
})

router.patch('/', (req, res)=>{
    res.send('Você fez uma requisiçã do tipo Patc')
})

router.delete('/', (req, res)=>{
    res.send('Você fez uma requisiçã do tipo Delete')
})

module.exports = router