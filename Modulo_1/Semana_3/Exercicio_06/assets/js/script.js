const perfil = document.getElementById('perfil')
const numero = document.getElementById('numero')
const pesquisar = document.getElementById('pesquisar')
let html = ''

const buscarDados = async (numero) => {
    if(!numero){
        perfil.innerHTML = 'Nenhum personagem encontrado.'
        return
    }

    perfil.innerHTML = ''

    try {
        const dados = await fetch(`https://rickandmortyapi.com/api/character/${numero}`)
        const json = await dados.json()

        html = `
            <img src=${json.image} alt='' />
            <h2>${json.name}</h2>
            <p>Genero: ${json.gender}</p>
            <p>Espécie: ${json.species}</p>
            <p>Status: ${json.status}</p>
            <p>Local: ${json.location.name}</p>
            <a href='' target='blank' /></a>
        ` 
        perfil.insertAdjacentHTML("beforeend", html)
    } catch (error) {
        console.log(error)
    }
}

pesquisar.addEventListener('click', () => {
    buscarDados(Number(numero.value))
})