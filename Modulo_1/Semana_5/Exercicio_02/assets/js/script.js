const usuarios = ['Pedro', 'José', 'Aderbal', 'Danilo', 'Luisa', 'Vitoria']
const frutas = ['Banana', 'Morango', 'Maçã', 'Uva', 'Pêra' , 'Laranja']
const resultado = []

// frutas.reverse()
// for(const [i, nome] of usuarios.entries()){ 
//     resultado.push(`${nome} - ${frutas[i]}`)
// }

let contador = frutas.length - 1
for(let i = 0; i < usuarios.length; i++){
    resultado.push(`${usuarios[i]} - ${frutas[contador]}`)
    contador--
}

console.log(resultado)