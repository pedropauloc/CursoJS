function tratarErroELancar(erro) {
    //throw new Error('Mensagem + o log do erro')
    // throw 10
    // throw true
    // throw 'mensagem'
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNome(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    }  finally { // executa dando erro ou não
        console.log('final')
    }
}

const obj = {nome: 'Roberto'}
imprimirNome(obj)