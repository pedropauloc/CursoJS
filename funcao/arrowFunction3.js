let comparaComThis = function (param) {
    console.log(this === param) // aqui ela vai apontar para o global
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param) // vai olhar o escopo da função
comparaComThisArrow(global)
comparaComThisArrow(module.exports) // module.exports === this

comparaComThisArrow = comparaComThis.bind(obj) // arrow function é mais forte, o bind não funfa
comparaComThis(obj)
comparaComThisArrow(module.exports) // continua apontando para o contexto da função