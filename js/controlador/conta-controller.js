class ContaController {
    constructor() {
        this.repositorioContas = new RepositorioContas();
    }

    adicionarConta(conta) {
        this.repositorioContas.adicionar(conta);
    }

    listar() {
        this.repositorioContas.getContas().forEach(conta =>
            this.inserirContaNoHTML(conta)
        );
    }

    inserir(evento) {
        evento.preventDefault();
        const elementoNumero = document.querySelector('#numero');
        const elementoSaldo = document.querySelector('#saldo');
        const elementodataAniversario = document.querySelector('#dataAniversario');
        const elementotipocontas = document.querySelector('#tipoConta');
        switch(elementotipocontas.value){
            case 'conta':
                const conta = new Conta(elementoNumero.value, Number(elementoSaldo.value));
                this.RepositorioContas.adicionar(conta);
                this.inserirContaNoHTML(conta);
                break;
            case 'contabonificada':
                const contabonificada = new Contabonificada(elementoNumero.value, Number(elementoSaldo.value));
                this.RepositorioContas.adicionar(contabonificada);
                this.inserirContaNoHTML(contabonificada);
                break;
            case 'poupanca':
                const poupanca = new poupanca(elementoNumero.value, Number(elementoSaldo.value), elementodataAniversario.value);
                this.RepositorioContas.adicionar(poupanca);
                this.inserirContaNoHTML(poupanca);
                break;
        }

        const conta = new Conta(elementoNumero.value,
            Number(elementoSaldo.value), elementotipocontas.value);
        this.repositorioContas.adicionar(conta);
        this.inserirContaNoHTML(conta);
    }

    inserirContaNoHTML(conta) {
        const elementoP = document.createElement('p');
        elementoP.textContent = 'Conta ' + conta.numero + ': ' + conta.saldo;
        const botaoApagar = document.createElement('button');
        botaoApagar.textContent = 'X';

        botaoApagar.addEventListener('click', (event) => {
            this.repositorioContas.remover(conta.numero);
            event.target.parentElement.remove();
        });

        elementoP.appendChild(botaoApagar);
        document.body.appendChild(elementoP);
    }
}
