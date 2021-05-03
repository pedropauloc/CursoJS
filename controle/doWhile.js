function getValorEntre(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1
do {
    opcao = getValorEntre(-1, 10)
    console.log(`Opcao escolhida ${opcao}`)
} while (opcao != -1)

