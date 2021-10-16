/*
028.129.931-54
0   2  8  1  2  9  9  3  1 
10x 9x 8x 7x 6x 5x 4x 3x 2x
0   18 64 7  12 45 36 9  2 = 193

11 - (193 % 11) = 5 (Primeiro digito)
se fosse maior que nove, considera como 0

0   2   8  1  2  9  9  3  1  5
11x 10x 9x 8x 7x 6x 5x 4x 3x 2x
0   20  72 8  14 54 45 12 3  10 = 238
11 - (238 % 11) = 4 (Segundo digito)
se fosse maior que nove, considera como 0
*/

function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo',{
        enumerable: true,
        get: function() {
            return cpfEnviado.replace(/\D+/g, '');
        },
    });
}

ValidaCpf.prototype.valida = function() {
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia())  return false;

    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
    
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
};

ValidaCpf.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regressivo = cpfArray.length + 1;
    const total = cpfArray.reduce((ac, val) => {
        ac += (regressivo * Number(val));
        regressivo --;
        return ac;
    }, 0);
    
    const digito = 11 - (total % 11);
    return digito > 9 ? '0' : String(digito);
};

ValidaCpf.prototype.isSequencia = function() {
    const sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length);
    return sequencia === this.cpfLimpo;
}

const cpf =  new ValidaCpf('028.129.931-54');
//console.log(cpf.cpfLimpo);
if(cpf.valida()) {
    console.log(`CPF Valido ` + cpf.cpfLimpo);
} else {
    console.log('CPF Invalido');
}

console.log(cpf)