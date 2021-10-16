// Retorne a soma do dobre todos os pares
// -> filtrar os pares
// -> dobrar os valores
// -> somar tudo 
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosFiltrados = numeros
.filter(value => value % 2 === 0)
.map(value => value * 2)
.reduce((ac, value) => ac += value);
console.log(numerosFiltrados);