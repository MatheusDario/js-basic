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
const conta1 = new Conta(2219, 25410-2, 100);
conta1.depositar(10)
conta1.sacar(50)
conta1.sacar(70)