// regex
const escola = "Cod3r"

console.log(escola.charAt(3))
console.log(escola.charAt(5))
console.log(escola.charCodeAt(3)) //pega o valor e converte para o valor unicode (tabela asc)
console.log(escola.indexOf('3')) // retorna o valor da posição 3

console.log(escola.substring(1)) // imprime do indice 1 em diante
console.log(escola.substring(0,3)) // imprime do indice 0 até o 3 (o indice 3 não é incluido)

console.log('Escola '.concat(escola).concat("!"))
// console.log('Escola ' + escola + "!"))
console.log(escola.replace(3, 'e'))

// /\d/ - substitui todos os numeros pela letra /\w/g - substitui tudo ( o G é a flag global)
console.log(escola.replace(/\d/, 'e')) // expressão regular

console.log('Ana,Maria,Pedro'.split(',')) // gera um array a partir do separador determinado