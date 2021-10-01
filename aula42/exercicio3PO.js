//Escreva uma funcao que recebe um numero e retorne o seguinte:
//numero e divisivel por 3 = Fizz => %3 == 0 true
//numero e divisivel por 5 = Buzz => %5 == true
//numero e divisivel por 3 e 5 = FizzBuzz vai em primeiro lugar
//numero nao e divisivel por 3 e 5 = retorna o proprio numero = ultima condicao
//chegar se o numero e um numero = retornar o que foi inserido = primeira condicao usando typeof
//use a funcao com numeros de 0 a 100 = usa o for antes da o console i vai ser a referencia

function numerosDivisiveis (x) {
    if(typeof x !== `number`) return `dado inserido incorreto ${x}`
    else if (x % 3 === 0  && x % 5 === 0) return `FizzBuzz`;
    if(x % 3 === 0) return `Fizz`; 
    else if (x % 5 ===0) return `Buzz`;
    else return x;
}

for (let i = 0; i <= 25; i++) {
    console.log(i, numerosDivisiveis(i))
}




