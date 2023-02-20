const perfil = document.getElementById('perfil')
let html = ''

const buscarDados = async () => {
    try {
        const dados = await fetch('https://api.github.com/users/walberson')
        const json = await dados.json()

        console.log(json)

        html += `
            <img src=${json.avatar_url} alt='' />
            <h2>${json.name}</h2>
            <p>${json.bio}</p>
            <p>${json.location}</p>
            <a href=${json.blog} target='blank' />Blog</a>
        ` 
        perfil.insertAdjacentHTML("beforeend", html)
    } catch (error) {
        console.log(error)
    }
}

buscarDados()

