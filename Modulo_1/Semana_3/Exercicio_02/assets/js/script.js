const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
const botao = document.getElementById('botao')
const link = document.getElementById('link')

botao.addEventListener('click', (e) => {
    e.preventDefault()
    criarLinkWhatsapp(telefone.value, mensagem.value)
})

function criarLinkWhatsapp(telefone, mensagem){
    const tel = `+55${telefone}`
    const texto = mensagem.replace(' ', '%20')

    const codigo = `https://api.whatsapp.com/send?phone=${tel}&text=${texto}`

    link.innerHTML = `<a target="_blank" href='${codigo}'>Link Whatsapp</a>`
}

const mascara = (event) => {
    let entrada = event.target
    entrada.value = aplicarMascara(telefone.value)
}

const aplicarMascara = (value) => {    
if (!value) return ""

value = value.replace(/\D/g,'')
value = value.replace(/(\d{2})(\d)/,"($1) $2")
value = value.replace(/(\d)(\d{4})$/,"$1-$2")

return value
}  