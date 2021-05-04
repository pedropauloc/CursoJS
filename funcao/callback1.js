// callback é vc passar um função e ela será chamada quando um evento acontecer
// nesses casos o evento é loop, assim que ele encontra um novo elemento ele dispara novamente
// o callback pode ocorrer tb quando vc clicar na tela por exemplo
const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

// forEach pra cada elemento que for encontrado ele irá chamar a função novamente
fabricantes.forEach(imprimir)
fabricantes.forEach( function(fabri) {
    console.log(fabri)
})