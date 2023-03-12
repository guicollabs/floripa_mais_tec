const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    const usuario = req.body

    if(!usuario){
        return res.status(400).json({message: `Dados inválidos!`})
    }

    return res.status(201).json(usuario)
})

module.exports = router