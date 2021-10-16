//map -> tem sempre o mesmo tamanho do arraz original, porem altera o valor do array

//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map((valor) => valor * 2);
//console.log(numerosDobrados);

//Para cada elemento:
//retorne apenas uma string com o nome da pessoa
//remova apenas a chave "nome" do obj
//adicione uma chave id em cada obj
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Matheus', idade: 24}
];

const nomePessoas = pessoas.map((obj) => obj.nome);
//console.log(nomePessoas);

const idadePessoas = pessoas.map((obj) => ({ idade: obj.idade }));
//console.log(idadePessoas);

const idPessoas = pessoas.map((obj, indice) => {
    const newObj = { ...obj };
    newObj.id = indice + 1;
    return newObj; 
});
console.log(idPessoas); 
console.log("----------"); 
console.log(pessoas);