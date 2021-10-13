const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia'];
console.log(nomes);
const removidos = nomes.splice(-1, 1); // igual o pop
nomes.splice(0,1); // igual shitf
nomes.splice(0, 0, 'Matheus'); // igual unshift
nomes.splice(nomes.length,0,'Dario'); // igual o push
console.log(nomes);
