/*
Utilizar a página de login para criar um sistema de autenticação utilizando localstorage. 
1. Quando o usuário logar, salvar as credenciais localmente. 
2. Se as credenciais existirem localmente, ir para uma página com um botão de logout, 
3. Se as credenciais não existirem, ir para a página de login.
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
  return (window.location.href = url);
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
  return;
});
