/*
Browser:
    - variaveis declaras com let e const não vão diretemante para o escopo global (window)
        > se eu chamar por exemplo: this.nome ou window.nome quando a variavel foi declarada com let e const vai dar erro

*/

// Node - no node, a variavel global é: global != do window do browser
let a = 3

global.b = 123
this.c = 456

console.log(a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)

// em node é mais comum ver 
// module.exports = { e: 456, f: false, g: 'teste'}

// criando uma varivale maluca, sem var nem let
abc = 3 // não faça isso - está criando diretamente no escopo global
console.log(global.abc)