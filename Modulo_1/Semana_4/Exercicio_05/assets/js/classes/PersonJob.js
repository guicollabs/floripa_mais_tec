import Person from './Person.js'

export default class PersonJob extends Person{
    constructor(nome, idade, altura, profissao){
        super(nome, idade, altura)
        this.profissao = profissao
    }

    apresentar(){
        return `Olá me chamo ${this.nome} tenho ${this.idade} anos e tenho ${this.altura} de altura e sou ${this.profissao}`
    }
}