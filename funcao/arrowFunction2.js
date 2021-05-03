// em casos que utilizamos a arrow function o this não varia de acordo com quem está chamando
function Pessoa() {
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) 
}

new Pessoa