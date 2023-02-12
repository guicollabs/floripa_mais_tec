/*
O Sr. Manoel Joaquim acaba de adquirir uma panificadora e pretende implantar a metodologia da tabelinha, que já é um sucesso na sua loja de 1,99. 
Você foi contratado para desenvolver o programa que monta a tabela de preços de pães, de 1 até 50 pães, a partir do preço do pão informado pelo usuário, conforme o exemplo abaixo:

Preço do pão: R$ 0.18
Panificadora Pão de Ontem - Tabela de preços
1 - R$ 0.18
2 - R$ 0.36
...
50 - R$ 9.00
*/

const tabela = document.getElementById("tabela");
const valor = document.getElementById("valor");
const calcular = document.getElementById("calcular");

function calcularValorPao() {
  const valorPaes = Number(prompt("Insira o valor do pão").replace(",", "."));
  let html = "";

  if (isNaN(valorPaes)) {
    valor.innerText =
      "Trapacenado hein :( \n Digite o valor correto da unidade.";
    return;
  }

  valor.innerText = `R$ ${valorPaes} unidade`;

  for (let i = 1; i <= 50; i++) {
    html += `
    <tr>
        <td>${i}</td>
        <td><strong>R$ ${(valorPaes * i).toFixed(2)}</strong></td>
    </tr>
    `;
  }

  tabela.insertAdjacentHTML("beforeend", html);
}

calcular.addEventListener("click", calcularValorPao);
