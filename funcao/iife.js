// IIFE -> Immediately Invoked Function Expression
// Função auto invocada - assim que é lido já é chamado
// Utilizada para fugir do escopo global

(function () {
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')

})() // invocando a função


// aqui está no escopo global
console.log('Será executado na hora!')
console.log('Foge do escopo mais abrangente!')
