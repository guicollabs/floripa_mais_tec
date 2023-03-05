const vogais = ['a', 'e', 'i', 'o', 'u']
let contador = 0

const contadorVogais = (texto) => {
    if(typeof texto !== 'string'){
        console.log('Permitido somente texto.')
        return
    }

    for(const letra of texto){
        if(vogais.includes(letra)){
            contador += 1
        }
    }

    console.log(`${contador} vogais encontradas no texto.`)
}