// let é utilizado quando realmente precisa alterar a variavel
let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(!!isAtivo) //é utilizado para ver seu verdadeiro valor logico

console.log('os verdadeiros ....')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'Texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true))

console.log('os falsos ....')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('pra finalizar ....')
console.log(!!'' || null || 0 || 'epa')

// exemplo pratico
let nome = ''
console.log(nome || 'Desconhecido')


