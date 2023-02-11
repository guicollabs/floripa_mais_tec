/*
1. Faça uma página de login que verifique se o login e a senha do usuário batem com um login e senha fictício (armazenados em um objeto). 
2. A página deve conter inputs e um botão para logar. 
3. Após o login, se as credenciais baterem com as fictícias deve-se imprimir ‘logado’, senão imprimir ‘credenciais incorretas’.
*/

const acesso = {
  nome: "admin",
  senha: "admin",
};

const nome = document.getElementById("nome");
const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem");
const form = document.getElementById("form");

function limpar() {
  nome.value = "";
  senha.value = "";
}

function verificar(nome, senha) {
  if (nome !== acesso.nome && senha !== acesso.senha) {
    mensagem.innerText = "Credenciais Incorretas.";
    limpar();
  } else {
    mensagem.innerText = "Logado.";
    limpar();
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  verificar(nome.value, senha.value);
});
