import Conta from './Conta.js';

export default class ContaPoupanca extends Conta{
    constructor(senha, saldo){
        super(senha, saldo)
    }

    atualizarJuros(){
        this.saldo += (this.saldo * 0.7) / 100
    }
}