//for classico
for(let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    //console.log(i, par)  
}
const frutas = ['maca', 'uva', 'abacaxi'];
for (let i in frutas) {
   // console.log(frutas[i])
}

//for in p/ obj
const pessoa = { nome: 'Matheus', sobrenome: 'Dario', idade: 23};
for (let dados in pessoa) {
    //console.log(dados ,pessoa[dados]);
}

//for of p/ retornar os valores
const nomes = ['Matheus', 'Arthur', 'Bianca']
for(let valor of nomes) {
    //console.log(valor)
}

nomes.forEach(function(valor, indice){
    //console.log(valor, indice)
})