const lista = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']

const adicionarUsuario = (...usuario) => {
    for(const nome of usuario){
        if(typeof nome !== 'string'){
            console.log('Apenas texto é permitido.')
            return
        }

        if(lista.includes(nome)){
            console.log(`O nome ${nome} já existe na lista.`)
            return
        }
        lista.push(nome)
    }
}