/*
 * Crie uma rota HTTP com express para simular o envio de um objeto pelo corpo da requisição e como resposta retorne esse objeto no formato json padrão.
 * OBS: utilize a plataforma de API que você preferir. 
 */
const express = require('express')
const app = express()

// Rota
const router = require('./routes')

// Middleware
app.use(express.json())

app.use('/api', router)

const PORT = 3000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))