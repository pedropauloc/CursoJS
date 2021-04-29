let valor //não inicializada
console.log(valor)

valor = null // utilizado para zerar o apontamente a um objeto - função
console.log(valor)
// console.log(valor.toString())

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined //evitar atribuir undefined
console.log(!!produto.preco)