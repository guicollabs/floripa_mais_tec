import ContaPoupanca from './ContaPoupanca.js'

export default class ContaPoupancaPremium extends ContaPoupanca{
    constructor(senha, saldo){
        super(senha, saldo)
    }

    atualizaJuros(){
        this.saldo += (this.saldo * 1.2) / 100
    }
}