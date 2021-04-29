// hoisting = içar
// quando se usa var ocorre o içamento 

console.log('a = ', a)
var a = 2
console.log('a = ', a)

/* o que realmente ocorreu com o codigo
 * var a
 * console.log('a = ', a)
 * a = 2
 * console.log('a = ', a)
*/