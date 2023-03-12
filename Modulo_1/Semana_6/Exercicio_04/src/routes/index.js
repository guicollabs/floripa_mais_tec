const express = require('express')
const router = express.Router()

router.get('/:nome', (req, res) => {
    const usuario = req.params

    if(!usuario){
        return res.status(400).json({message: `Usuário não localizado!`})
    }

    return res.status(200).json({message: `Rota da API criada por: ${usuario.nome.toUpperCase()}`})
})

module.exports = router