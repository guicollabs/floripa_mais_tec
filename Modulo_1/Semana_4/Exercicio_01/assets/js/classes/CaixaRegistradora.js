export default class CaixaRegistradora{
    estoque = []
    caixa = []

    adicionarProduto(codigoBarra, nome, preco){
        const item = {
            codigoBarra, 
            nome, 
            preco
        }
        this.estoque.push(item)
    }

    verificarEstoque(){
        this.estoque.forEach((item, i) => {
            console.log(`**********************************\nProduto ${i+1}: ${item.codigoBarra} | ${item.nome} | R$ ${Number(item.preco).toFixed(2)}\n**********************************`)
        })
    }

    atendimento(nome){
        return `Olá ${nome}, como podemos ajudar?`
    }

    adicionarItens(codigoBarra, quantidade){
        const temCodigo = this.estoque.find(item => item.codigoBarra === codigoBarra)

        if(!temCodigo){
            console.log('Produto indisponível!')
            return
        }

        if(codigoBarra && quantidade){
            this.caixa.push({codigoBarra, quantidade})
        }     
    }

    valorTotal(){
        let total = 0
        this.caixa.forEach(compra => {
            this.estoque.forEach(produto => {
                if(compra.codigoBarra === produto.codigoBarra){
                    total += compra.quantidade * produto.preco
                    console.log(`*********\n${produto.nome}: ${produto.preco}\n*********`)
                }
            })
        })
        return total
    }

    fecharConta(){
        const total = this.valorTotal()
        const dinheiro = Number(prompt(`O valor da compra foi de R$ ${total}. Qual o valor da nota do pagamento?`).replace(',','.'))
        const troco = dinheiro > total ? `Seu troco é: ${dinheiro - total}` : 'Dinheiro insuficiente'
        return troco
    }
}

