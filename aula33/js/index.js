for(let i = 0; i <= 10; i++) {
    const par = i % 2 === 0;
    //console.log(i, par)  
}

const frutas = ['maca', 'uva', 'abacaxi'];
for (let i in frutas) {
    //console.log(frutas[i])
}

const pessoa = { nome: 'Matheus', sobrenome: 'Dario', idade: 23};
for (let dados in pessoa) {
    console.log(dados ,pessoa[dados]);
}