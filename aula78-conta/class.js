// criar utilizando class conta cp, ag, conta e saldo ter metodos de sacar, depositar e extrato e especializar com cc e cp
class Conta {
    constructor(agencia, conta, saldo) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
    }

    extrato() {
        console.log(`Ag/C: ${this.agencia} ${this.conta} o seu extrato e: ${this.saldo} reais`)
    }

    sacar(valor) {
        if(valor > this.saldo) {
            console.log(`Saldo insuficiente, o seu saldo e R$${this.saldo} reais`);
            return
        }
        this.saldo -= valor;
        this.extrato()
    }

    depositar(valor) {
        this.saldo += valor;
        this.extrato();
    }
}

class ContaCorrente extends Conta {
    constructor(agencia, conta, saldo, limite) {
        super(agencia, conta, saldo);
        this.limite = limite;
    }

    limite(valor) {
        this.limite -= valor;
        console.log(`O seu limite e: ${this.limite}`)
    }

    sacar(valor) {
        if(valor > (this.saldo + this.limite)) {
            console.log(`Saldo insuficiente: ${this.saldo}`);
            return;
        }
        this.saldo -= valor;
        console.log(`O seu saldo e: ${this.saldo} e seu limite e ${this.limite}`)
    }

    extrato() {
        console.log(`Ag/C: ${this.agencia} ${this.conta} o seu extrato e: ${this.saldo} reais o seu limite e: R$${this.limite}`);
    }
    
}

const cc1 = new ContaCorrente(2249,82142, 100, 200);
cc1.depositar(10);
cc1.sacar(90);
cc1.sacar(40);
cc1.sacar(80);

