/*
Crie um cronômetro que seja executado por um botão, conte 10 segundos, e no fim imprima um texto: 'Seu tempo acabou!! Tente novamente!!'.
*/
let tempo = 10;
const button = document.getElementById("iniciar");
const mensagem = document.getElementById("tempo");

function cronometro() {
  mensagem.innerText = tempo;
  if (tempo > 0) {
    tempo--;
  } else {
    clearInterval(cronometro);
    mensagem.innerText = "Seu tempo acabou!! Tente novamente!!";
    setTimeout(() => window.location.reload(), 2000);
  }
}

function iniciar() {
  setInterval(cronometro, 1000);
}

button.addEventListener("click", iniciar);
