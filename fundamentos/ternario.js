// é composto por 3 partes 
// condição(nota >= 7) ? casoTrue('Aprovado') : casoFalse('Reprovado')
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.7))