import json from './../../database/users.json' assert {type: 'json'}

const campo = document.getElementById('pesquisar')
const botao = document.getElementById('botao-pesquisar')
const limpar = document.getElementById('botao-limpar')
const lista = document.getElementById('lista-usuarios')

botao.addEventListener('click', () => {
    lista.innerHTML = ''
    const dados = filtrarUsuario(campo.value)

    if(dados.length === 0 || campo.value === ''){
        lista.innerHTML = "<h2>Usuário não encontrado</h2>"
        return
    }
    carregarListaUsuarios(dados)
})

limpar.addEventListener('click', () => {
    lista.innerHTML = ''
    campo.value = ''
    carregarListaUsuarios(json)
})

function filtrarUsuario(valor){
    return json.filter(item => item.username === campo.value)
}

function carregarListaUsuarios(dados){
    if(!dados){
        lista.innerHTML = "<h2>Usuários não encontrados.</h2>"
    }    

    dados.forEach((usuario) => {
        let div = document.createElement('div')
        div.innerHTML = `
        <span>Name: ${usuario.name}</span>
        <span>Username: ${usuario.username}</span>
        <span>Rating: ${usuario.rating}</span>
        <span>Favorites: ${usuario.favorites}</span>
        <span>Visits: ${usuario.visits}</span>
        <span>Difficulty: ${usuario.difficulty}</span>
        <span>Terrain: ${usuario.terrain}</span>
        <span>Size: ${usuario.size}</span>
        <span>Created: ${usuario.created}</span>
        <span>Updated: ${usuario.updated}</span>
        <span>Coords: ${usuario.coords}</span>
        `
        lista.append(div)
    });
}

window.addEventListener('load', carregarListaUsuarios(json)) 





