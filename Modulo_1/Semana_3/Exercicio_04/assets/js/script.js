const pesquisar = document.getElementById('pesquisar')
const resultado = document.getElementById('resultado')
const data = document.getElementById('data')

function verificarData(data){

    const diffInMs = new Date(data) - new Date()
    const diffInDays = Math.round(diffInMs / (1000 * 60 * 60 * 24))

    if(diffInDays < 0){
        resultado.innerHTML = `Seu aniversário já passou 🤷`
    }else if(diffInDays === 0){
        resultado.innerHTML = `Parabéns! Hoje é seu aniversário 🎉`
    }else{
        resultado.innerHTML = `Faltam, aproximadamente, ${diffInDays} dia(s) para o seu aniversário 👌`
    }
}

pesquisar.addEventListener('click', () => {
    if(!data.value){
        resultado.innerHTML = "Selecione uma data"
        return
    }
    verificarData(data.value)
})


