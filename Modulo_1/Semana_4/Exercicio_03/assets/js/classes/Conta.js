export default class Conta{
    constructor(senha, saldo){
        this.senha = senha
        this.saldo = saldo
    }

    deposito(senha, saldo){
        if(senha !== this.senha){
            alert('Senha incorreta! Tente novamente.')
            return
        }

        this.saldo += saldo
    }

    retirada(valor){
        if(valor > this.saldo){
            alert(`Valor indisponível para saque. Seu saldo atual é de ${this.saldo}}`)
            return
        }

        this.saldo -= valor
    }
}