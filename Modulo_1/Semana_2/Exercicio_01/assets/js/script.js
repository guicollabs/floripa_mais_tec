/*
1. Calcular a média
2. Imprimir o nome dos alunos aprovados ou reprovados 
3. Utilizar estruturas de repetição

Nota: Realize as mesmas operações de cálculo e impressão do nome dos alunos aprovados/reprovados utilizando agora estruturas de repetição.
*/

const alunos = [
  {
    nome: "Eldimar Braga Mello",
    altura: 1.7,
    idade: 16,
    sexo: "Masculino",
    sala: "105",
    matematica: 8,
  },
  {
    nome: "Gutemberg Soriano Zava",
    altura: 1.85,
    idade: 18,
    sexo: "Masculino",
    sala: "102",
    matematica: 7.5,
  },
  {
    nome: "Raiane Bastos Santos",
    altura: 1.69,
    idade: 17,
    sexo: "Feminino",
    sala: "102",
    matematica: 8.1,
  },
  {
    nome: "Emiliana Barros Freitas",
    altura: 1.7,
    idade: 18,
    sexo: "Feminino",
    sala: "105",
    matematica: 6,
  },
  {
    nome: "Maria Aline Santomauro Lucas",
    altura: 1.7,
    idade: 19,
    sexo: "Feminino",
    sala: "105",
    matematica: 10,
  },
];

console.log("*******************For********************");
for (let i = 0; i < alunos.length; i++) {
  if (alunos[i].matematica > 7)
    console.log(
      `${alunos[i].nome} está aprovado com a média ${alunos[i].matematica}.`
    );
  else
    console.log(
      `${alunos[i].nome} está reprovado com a média ${alunos[i].matematica}.`
    );
}

console.log("******************For/of******************");

for (const aluno of alunos) {
  if (aluno.matematica > 7)
    console.log(`${aluno.nome} está aprovado com a média ${aluno.matematica}.`);
  else
    console.log(
      `${aluno.nome} está reprovado com a média ${aluno.matematica}.`
    );
}

console.log("******************Foreach******************");

alunos.forEach((aluno) => {
  if (aluno.matematica > 7)
    console.log(`${aluno.nome} está aprovado com a média ${aluno.matematica}.`);
  else
    console.log(
      `${aluno.nome} está reprovado com a média ${aluno.matematica}.`
    );
});
