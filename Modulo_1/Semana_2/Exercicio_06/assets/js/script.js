/**
1. Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. 
2. O usuário deve informar de qual numero ele deseja ver a tabuada. 
3. A saída deve ser conforme o exemplo abaixo:

Tabuada de 5:
5 X 1 = 5
5 X 2 = 10
...
5 X 10 = 50
 */

const tabela = document.getElementById("tabela");
const numero = document.getElementById("numero");
const calcularTabuada = document.getElementById("tabuada");

function tabuada() {
  const numeroEscolhido = Number(prompt("Digite um número [1 ... 10]"));
  let html = "";

  if (isNaN(numeroEscolhido)) {
    numero.innerText = "Trapaceando hein :( \nDigite um número de 1 a 10.";
    return;
  }

  numero.innerText = `Você escolheu calcular a tabuada de: ${numeroEscolhido}`;
  tabela.innerHTML = "";

  for (let i = 0; i < 10; i++) {
    html += `
        <tr>
            <td>${numeroEscolhido}</td>
            <td>❎</td>
            <td>${i}</td>
            <td><strong>${numeroEscolhido * i}</strong></td>
        </tr>
    `;
  }

  tabela.insertAdjacentHTML("beforeend", html);
}

calcularTabuada.addEventListener("click", tabuada);
