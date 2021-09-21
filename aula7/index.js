const nome = 'Matheus Dario';
const sobrenome = 'Silva';
const idade = 24;
const peso = 90;
const altura = 1.77;
let imc; // peso / (altura * altura)
let anoNascimento; // ano atual - ano nascimento 
const anoAtual = 2021

anoNascimento = anoAtual - idade;
imc = peso / (altura * altura);
/*
console.log(nome, sobrenome, 'nasceu em ' + anoNascimento + ' e tem ' + idade + ' anos ' + ' pesa ' + peso + 
'kg ' + ' e tem ' + altura + ' de altura e seu IMC é de ' + imc); */

console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento} e tem ${idade} anos e pesa ${peso} kg e tem
altura de ${altura} e seu IMC é de  ${imc}`);  