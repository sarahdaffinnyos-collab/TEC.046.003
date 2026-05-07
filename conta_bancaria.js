class ContaBancaria {
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    verSaldo() {
        console.log(`
            Olá ${this.titular},
            seu saldo atual é
            R$ ${this.saldo}`)
        }

    depositar(valor) {
        this.saldo += valor;
    }

    // criar o metodo sacar e sacar 100 da sua conta
    sacar(valor) {
        this.saldo-= valor;
    }
}

let contaDoDafne = new ContaBancaria("Dafne", 1000000)
contaDoDafne.verSaldo()

let contaDoJoab = new ContaBancaria ("Joab", 15000)
contaDoJoab.verSaldo()
contaDoJoab.depositar(350)
contaDoJoab.verSaldo()