const listaCompleta = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria', 'Luis', 'Danilo', 'José']
const listaRemovidos = []
const listaUnica = []

for([i, nome] of listaCompleta.entries()){
    if(listaCompleta.indexOf(nome) === i){
        listaUnica.push(nome)
    }else{
        listaRemovidos.push(nome)
    }
}

const lista = [...listaRemovidos, listaUnica]
console.log(lista)

