function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() { // a cada 1000ms a função irá ser executada novamente
        self.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000) // está amrrando essa função, para que o valor idade seja reconhecido de Pessoa
}

new Pessoa


// Utilizando o bind
/*
function Pessoa() {
    this.idade = 0

    setInterval(function() { // a cada 1000ms a função irá ser executada novamente
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // está amrrando essa função, para que o valor idade seja reconhecido de Pessoa
}

new Pessoa
*/