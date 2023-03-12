const express = require('express')
const app = express()

// Middleware
app.use(express.json())

// Rota
const router = require('./routes')

app.use('/api', router)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))