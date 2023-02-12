/*
Faça com que o usuário possa alterar informações da conta, que serão salvas em localStorage, como url da imagem de perfil, e-mail e nome.
*/

function salvarLocalStorage(chave, valor) {
  localStorage.setItem(chave, JSON.stringify(valor));
}

function obterLocalStorage(chave) {
  const dados = localStorage.getItem(chave)
    ? JSON.parse(localStorage.getItem(chave))
    : null;
  return dados;
}

function removerLocalStorage() {
  localStorage.clear();
  redirecionar("index.html");
}

function redirecionar(url) {
  return (window.location = url);
}

function limpar() {
  nome.value = "";
  senha.value = "";
}

function verificar(nome, senha) {
  if (nome !== credenciais.nome && senha !== credenciais.senha) {
    mensagem.innerText = "Credenciais Incorretas.";
    limpar();
    return;
  }
  salvarLocalStorage("usuario", { nome, senha });
  redirecionar("painel.html");
}

const credenciais = {
  nome: "admin",
  senha: "admin",
};

/* Elementos */

const nome = document.getElementById("nome");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const formulario = document.getElementById("formulario");

/* Atribuição */

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  verificar(nome.value, senha.value);
});

window.addEventListener("load", () => {
  const usuario = obterLocalStorage("usuario");
  if (usuario) {
    redirecionar("painel.html");
  }

  if (!usuario) {
    redirecionar("index.html");
    return;
  }
});
