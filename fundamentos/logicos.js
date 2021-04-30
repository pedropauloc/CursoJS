function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    //const comprarTv32 = !!(trabalho1 ^ trabalho2) // bitwise xor (bit a bit)
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel} // criando um obj
    // ele cria um obj chave/valor com o mesmo nome, caso não deixar explicito como:
    /*
     return { comprarSorvete: comprarSorvete, 
              comprarTv50: comprarTv50, 
              comprarTv32: comprarTv32, 
              manterSaudavel: manterSaudavel
            }
    */
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))