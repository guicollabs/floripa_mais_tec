/*
 * Crie uma rota HTTP com express para simular o envio do seu nome como parâmetro da url e imprima em um console.log() a mensagem “Rota de API criada pelo(a): {nome}”;
 * OBS: substitua o {nome} pelo nome que é passado como parâmetro da url.
 * OBS: utilize a plataforma de API que você preferir. 
 */
const express = require('express')
const app = express()

// Rota
const router = require('./routes')

app.use('/api/', router)

const PORT = 3000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))