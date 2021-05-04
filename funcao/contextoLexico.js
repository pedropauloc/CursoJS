const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'Local'
    // a função carrega consigo o local em que ela foi definida
    minhaFuncao()  // ela vai pagar o valor global, por conta do contexto da funcao

}

