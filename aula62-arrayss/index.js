const nomes = ['Eduardo','Maria', 'Joana'];
nomes[2] = 'Joao';
delete nomes[1]; // usar para deletar sem alterar os idices
nomes.pop(); // remove no final do array
nomes.push('pedro', 'joaquim'); // add no final do array
nomes.unshift('maria') //adiciona no comeco
nomes.shift();// remove do comeco
const novoNomes = nomes.slice(0, -1);
console.log(nomes);
console.log(novoNomes);

const carros = 'corsa, vectra, marea'; // string
console.log(carros);
const carrosArray = carros.split(','); //add em uma nova variavel e converte para um array usando a , como parametro
console.log(carrosArray);