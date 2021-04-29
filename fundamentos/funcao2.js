// Armazenando uma funcao em uma variavel
const imprimirSoma = function (a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// Armazenando uma funcao arrowem uma variavel
// => - arrow
const soma = (a, b) => {
    return a + b
}

console.log(soma(2, 3))

// retorno implicito
const subtracao = (a, b) => a - b // utilziado para funcoes de uma unica linha, e retorna o resultado auto
console.log(subtracao(2, 3))

const imprimir2 = a => console.log(a)
imprimir2('Legal!!!')