// quqando vc tem uma função tradicional em JS, definido com function 
// o this pode variar

// Mas se utilizar uma arrow function ele não tem variação
// assim que a função for definida ele pega o valor do this associado
// ao contexto em que a função foi definida

// se eu escrever a função no contexto global, o this sempre vai apontar pro window/global


// const f3 = () => console.log(this === window)
// document.getElementByTagName('body')[0].Onclick = f3