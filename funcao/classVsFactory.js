class Pessoa {
    constructor(nome) { // para inicializar as variaveis
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()


// função factory - nesse caso não vai importar quem está chamando, 
//sempre vai apontar pra variavel certa (browser)
const criarPessoa = nome => {
    return {
        falar: () => console.log(`Meu nome é ${this.nome}`)
    }
}

const p2 = criarPessoa('João')
p1.falar()