// criar conta cp, ag, conta e saldo ter metodos de sacar, depositar e extrato e especializar com cc e cp
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this.saldo) {
        console.log(`Saldo insuficiente: ${this.saldo}`)
        return;
    }

    this.saldo -= valor;
    this.extrato();
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.extrato();
};

Conta.prototype.extrato = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)} `);
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
};
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if(valor >(this.saldo + this.limite) ) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
    console.log(`O seu saldo e: ${this.saldo} e seu limite e: ${this.limite}`)
};

CC.prototype.extrato = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} Saldo: R$${this.saldo.toFixed(2)} Limite: R$${this.limite.toFixed(2)}`);
};

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
};
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(55, 88, 80);
cp.sacar(40); 
cp.sacar(41); 

console.log('--------');

const conta = new Conta(220, 112, 80);
conta.sacar(40); 
conta.sacar(41); 

console.log('--------');

const cc = new CC(110, 225, 80, 100);
cc.sacar(40); 
cc.sacar(41); 
