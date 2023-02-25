// import Conta from  './classes/Conta.js'
// import ContaPoupanca  from './classes/ContaPoupanca.js'
import ContaPoupancaPremium from "./classes/ContaPoupancaPremium.js"

const poupancaPremium = new ContaPoupancaPremium(300,1000)

console.log(poupancaPremium)

poupancaPremium.atualizaJuros()
console.log(poupancaPremium)


