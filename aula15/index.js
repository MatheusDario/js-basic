let numero = Number(prompt('Digite um número: '));

const numeroTitulo = document.getElementById("numero-titulo");
const numeroTitulo2 = document.getElementById("numero-titulo2");
const raizQuadrada = document.getElementById("raiz-quadrada");
const numeroInteiro = document.getElementById("verifica-inteiro");
const nan = document.getElementById("isnan");
const numeroMenor = document.getElementById("arredondar-menor");
const numeroMaior = document.getElementById("arredondar-maior")
const duasCasas = document.getElementById("duas-casas")

numeroTitulo.innerHTML = numero;
numeroTitulo2.innerHTML = numero;
raizQuadrada.innerHTML = Math.sqrt(numero);
numeroInteiro.innerHTML = Number.isInteger(numero);
nan.innerHTML = isNaN(numero);
numeroMenor.innerHTML = Math.floor(numero);
numeroMaior.innerHTML = Math.ceil(numero);
duasCasas.innerHTML = numero.toFixed(2);

