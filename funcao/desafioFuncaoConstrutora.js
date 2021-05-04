// transformando a classe pessoa (classVsFactory) em função construtora
function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function() {
        console.log(`Meu nome é ${nome}`)
    }
}

const p1 = new Pessoa('João')
p1.falar()