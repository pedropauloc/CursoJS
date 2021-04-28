// em JS o array é heterogeneo (pode ter qualquer tipo) e aumenta de tamanho
const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4]) // retorna undefined quando não tem valor na posição 

valores[10] = 10
console.log(valores)
console.log(valores.length)

valores.push({id: 3}, false, null, 'teste')  // acrescentar novos valores em um array

console.log(valores.pop()) // restira o ultimo valor 
delete valores[0]
console.log(valores)

console.log(typeof valores) //object 