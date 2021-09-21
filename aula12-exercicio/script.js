/*
    O valor de A deve apontar para B
    O valor B para o valor de C
    e o valor de C aponte para A
*/

let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const controler = varA;

varA = varB;
varB = varC;
varC = controler;

console.log(varA, varB, varC);