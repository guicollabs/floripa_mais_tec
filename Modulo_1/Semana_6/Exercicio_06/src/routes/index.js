const express = require('express')
const router = express.Router()

const banco = []

// Middleware
const {verificarCargo} = require('./../middleware')

router.get('/', (req, res) => {
    return res.status(200).json(banco)
})

router.post('/', verificarCargo, (req, res) => {
    const {nome, idade, cargo, senha} = req.body

    if(!nome || !idade || !cargo || !senha){
        return res.status(406).json({message: 'Está faltando dados para concluir a operação. Preencha nome, idade, cargo e senha.'})
    }

    if(idade < 21){
        return res.status(400).json({message: 'Usuário não possui idade suficiente.'})
    }

    const dados = {
        id: banco.length + 1,
        nome,
        idade,
        cargo,
        senha
    }

    banco.push(dados) 
    console.log(banco)   
    return res.status(201).json({message: 'Usuário criado com sucesso!'})
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    if(!id || isNaN(id)){
        return res.status(406).json({message: 'Está faltando dados para concluir a operação. Digite o ID do usuario.'})
    }

    const usuario = banco.find(usuario => usuario.id === Number(id))

    if(!usuario){
        res.status(400).json({message: "Usuário não encontrado."})
    }

    const remover = banco.filter(usuario => usuario.id !== Number(id))
    console.log(remover)
    return res.status(200).json({message: 'Usuário removido com sucesso!', banco: remover})
})

module.exports = router