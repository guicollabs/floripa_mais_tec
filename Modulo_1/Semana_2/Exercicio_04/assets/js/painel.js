/*
Faça com que o usuário possa alterar informações da conta, que serão salvas em localStorage, como url da imagem de perfil, e-mail e nome.
*/

// Formulario
const imagemFormulario = document.getElementById("imagemUsuario");
const nomeFormulario = document.getElementById("nomeUsuario");
const emailFormulario = document.getElementById("emailUsuario");
const senhaAntigaFormulario = document.getElementById("senhaAntigaUsuario");
const novaSenhaFormulario = document.getElementById("novaSenhaUsuario");
const mensagemFormulario = document.getElementById("mensagem");
const formularioPerfil = document.getElementById("formularioPerfil");

// Perfil
const imagemPerfil = document.getElementById("imagemPerfil");
const nomePerfil = document.getElementById("nomePerfil");
const emailPerfil = document.getElementById("emailPerfil");

function limpar() {
  imagemFormulario.value = "";
  nomeFormulario.value = "";
  emailFormulario.value = "";
  senhaAntigaFormulario.value = "";
  novaSenhaFormulario.value = "";
}

function atualizarPerfil() {
  imagemPerfil.src = imagemFormulario.value;
  nomePerfil.innerText = nomeFormulario.value;
  emailPerfil.innerText = emailFormulario.value;

  const dados = obterLocalStorage("usuario");

  if (senhaAntigaFormulario.value !== dados.senha) {
    mensagemFormulario.innerText = "Senha antiga invália. Tente novamente";
    return;
  }

  let atualizarDados = {
    ...dados,
    imagem: imagemFormulario.value,
    nome: nomeFormulario.value,
    email: emailFormulario.value,
    senha: novaSenhaFormulario.value,
  };

  salvarLocalStorage("usuario", atualizarDados);
  limpar();
}

formularioPerfil.addEventListener("submit", (e) => {
  e.preventDefault();
  atualizarPerfil();
});

window.addEventListener("load", () => {
  dados = obterLocalStorage("usuario");
  if (dados) {
    imagemPerfil.src = dados.imagem
      ? dados.imagem
      : "https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg";
    nomePerfil.innerText = dados.nome ? dados.nome : "";
    emailPerfil.innerText = dados.email ? dados.email : "";
  }

  if (!dados) {
    redirecionar("index.html");
  }
});
