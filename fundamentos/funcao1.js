// é um trecho de codigo que vc dá um nome a ele e pode ser utilizado quantas
// vezes for necessario e em qualquer lugar

// Funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) // o valor b vai ser undefined logo o resultado vai ser um NaN

// Funcao com retorno
function soma(a, b = 1) {
    return a + b
}

console.log(soma(2, 4))