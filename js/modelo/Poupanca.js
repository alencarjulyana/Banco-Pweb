class Poupanca extends Conta {
    constructor(numero, saldo, dataAniversario) {
        this.dataAniversario = dataAniversario;
        super(numero, saldo);
    }

    creditarpoupanca(valor) {
        super.creditarpoupanca(valor * 1.05);
    }

}
