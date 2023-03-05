const usuarios = [
    {
        nome: "luis", 
        idade: 26
    },    
    {
        nome: "norma", 
        dade: 16
    },    
    {
        nome: "daiana", 
        idade: 26
    },    
    {
        nome: "jorge", 
        idade: 16
    },    
    {
        nome: "kauan", 
        idade: 16
    },    
    {
        nome: "charles", 
        idade: 26
    },    
    {
        nome: "marco", 
        idade: 16
    },    
    {
        nome: "bruno", 
        idade: 16
    }    
]

const maiores = usuarios.filter(usuario => usuario.idade >= +18)
const menores = usuarios.filter(usuario => usuario.idade < +18)

console.log(maiores)
console.log(menores)