/*
 * Inicie um servidor node local em sua máquina utilizando express. 
 * O resultado esperado é imprimir na tela do navegador uma mensagem da sua escolha. 
 */
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    return res.send('Olá Mundo!')
})

const PORT = 3000

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))