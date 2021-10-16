//reduce -> reduzir a funcao do array em um numero

//some todos os numeros
//retorne um array com numeros pares
//retorne um array com o dobre os valores
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const somaNumeros = numeros.reduce((acumulador,obj) => acumulador += obj );
//console.log(somaNumeros);

const numerosPares = numeros.reduce((acumulador, obj) => {
    if(obj % 2 !== 0) acumulador.push(obj);
    return acumulador;
}, []);
//console.log(numerosPares);

const pares = numeros.filter((valor) => {
    if(valor % 2 === 0) {
        return valor;
    }
});
//console.log(pares);

//retorne a pessoa mais velha
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Matheus', idade: 24}
];

const pessoaIdosa = pessoas.reduce((acumulador, obj) => {
    if(acumulador.idade > obj.idade) return acumulador;
    return obj;
});
console.log(pessoaIdosa);