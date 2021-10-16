//filter -> retorna um array com a mesma quantidade de elementos ou menos
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numMaiorDez = numeros.filter(valor => valor > 10);
//console.log(numMaiorDez);

//retorne pessoas que tem o nome maior que 5 letras
//retorne pessoas com mais de 50 anos
//retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Matheus', idade: 24}
];

const pessoasNomeGrande = pessoas.filter((obj) => obj.nome.length > 5);
//console.log(pessoasNomeGrande);

const pessoasIdosas = pessoas.filter((obj) => obj.idade > 50);
//console.log(pessoasIdosas);

const pessoasLastA = pessoas.filter((obj) => obj.nome.toLowerCase().endsWith('a'));
console.log(pessoasLastA);