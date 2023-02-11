/*

A escola precisa saber a média de nota dos alunos de uma determinada série. Para isso precisamos de sua ajuda. 
1. Crie uma propriedade dentro de cada objeto aluno chamado Matemática com um valor fictício
2. Utilize operadores aritméticos para obter a média dos alunos
3. Imprima no terminal.

Nota: na semana 1 não foram abordados os conteúdos sobre laços de repetição, sendo assim, nessa lista de exercícios as soluções podem parecer engessadas. Acalmem os seus corações :)
*/

// Objeto Alunos
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
    altura: 1.75,
    idade: 16,
    sexo: "Masculino",
    sala: "105",
    matematica: 7.5,
  },
  {
    nome: "Raiane Bastos Santos",
    altura: 1.66,
    idade: 16,
    sexo: "Feminino",
    sala: "105",
    matematica: 8.1,
  },
  {
    nome: "Emiliana Barros Freitas",
    altura: 1.7,
    idade: 16,
    sexo: "Feminino",
    sala: "105",
    matematica: 9,
  },
  {
    nome: "Maria Aline Santomauro Lucas",
    altura: 1.68,
    idade: 16,
    sexo: "Feminino",
    sala: "105",
    matematica: 10,
  },
];

// Média dos Alunos
const total =
  alunos[0].matematica +
  alunos[1].matematica +
  alunos[2].matematica +
  alunos[3].matematica +
  alunos[4].matematica;
const totalAlunos = alunos.length;
const media = total / totalAlunos;

console.log(total, totalAlunos, media);
