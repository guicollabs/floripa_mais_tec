/*
O Sr. Manoel Joaquim expandiu seus negócios para além dos negócios de 1,99 e agora possui uma loja de conveniências. 
* Faça um programa que implemente uma caixa registradora rudimentar. 
* O programa deverá receber um número desconhecido de valores referentes aos preços das mercadorias. 
* Um valor zero deve ser informado pelo operador para indicar o final da compra. 
* O programa deve então mostrar o total da compra e perguntar o valor em dinheiro que o cliente forneceu, para então calcular e mostrar o valor do troco. 
* Após esta operação, o programa deverá voltar ao ponto inicial, para registrar a próxima compra. 
A saída deve ser conforme o exemplo abaixo:

Lojas Tabajara
Produto 1: R$ 2.20
Produto 2: R$ 5.80
Produto 3: R$ 0
Total: R$ 9.00
Dinheiro: R$ 20.00
Troco: R$ 11.00
*/

const compras = document.getElementById("compras");
const iniciar = document.getElementById("iniciar");
let listaProdutos = [];
let html = "";
let total = 0;

function adicionarItens() {
  let item = prompt(
    "Digite o nome do produto.\n*Se quiser sair digite 0 ou cancele."
  );
  while (item !== "0") {
    if (item === null) {
      return;
    }
    listaProdutos.push({
      produto: item,
      preco: (Math.random() * 10).toFixed(2),
    });
    item = prompt(
      "Digite o nome do produto.\n*Se quiser sair digite 0 ou cancele."
    );
  }

  let i = 0;
  for (i; i < listaProdutos.length; i++) {
    html += `<p><strong>${listaProdutos[i].produto}</strong> - R$ ${listaProdutos[i].preco}</p>`;
  }

  total = listaProdutos.reduce((total, item) => total + Number(item.preco), 0);

  if (i === listaProdutos.length) {
    html += `<p>Total: ${total.toFixed(2)}</p>`;
  }

  const pagamento = Number(
    prompt(
      `O total das compras foi de R$ ${total.toFixed(
        2
      )}. Quanto será o valor da nota do pagamento?`
    ).replace(",", ".")
  );

  if (pagamento > total) {
    troco = `Seu troco: ${(pagamento - total).toFixed(2)}`;
    compras.insertAdjacentHTML("beforebegin", html);
  } else {
    troco = "Não vendemos fiado :(";
  }

  alert(`${troco}`);
}

iniciar.addEventListener("click", () => {
  adicionarItens();
});
