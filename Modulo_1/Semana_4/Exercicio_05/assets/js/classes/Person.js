export default class Person{
    constructor(nome, idade, altura){
        this.nome = nome
        this.idade = idade
        this.altura = altura
    }

    apresentar(){
        return `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura`
    }
}