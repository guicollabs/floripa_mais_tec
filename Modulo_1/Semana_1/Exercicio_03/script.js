/*
 1. Imprima o nome do aluno e o valor aprovado ou reprovado
 2. Utilize operadores condicionais.

 Nota: na semana 1 não foram abordados os conteúdos sobre laços de repetição, sendo assim, nessa lista de exercícios as soluções podem parecer engessadas. Um passo de cada vez, acalmem os seus corações :) 
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

if (alunos[0].matematica > 7) {
  console.log(`${alunos[0].nome} está aprovado.`);
} else {
  console.log(`${alunos[0]} está reprovado.`);
}

if (alunos[0].matematica > 7) {
  console.log(`${alunos[1].nome} está aprovado.`);
} else {
  console.log(`${alunos[1]} está reprovado.`);
}

if (alunos[0].matematica > 7) {
  console.log(`${alunos[2].nome} está aprovado.`);
} else {
  console.log(`${alunos[2]} está reprovado.`);
}

if (alunos[0].matematica > 7) {
  console.log(`${alunos[3].nome} está aprovado.`);
} else {
  console.log(`${alunos[3]} está reprovado.`);
}

if (alunos[0].matematica > 7) {
  console.log(`${alunos[4].nome} está aprovado.`);
} else {
  console.log(`${alunos[4]} está reprovado.`);
}
