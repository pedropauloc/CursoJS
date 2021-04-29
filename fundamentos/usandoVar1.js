// o var ficara visivel dentro de todo o codigo (menos quando for uma funcao)
// sempre evitar criar variaves de escopo global 
// tem: escopo global - escopo de funcao
{{{{ var sera = 'Será???'}}}}
console.log(sera)

function teste(){
    var local = 123
    console.log(local)
}

teste()
console.log(local)