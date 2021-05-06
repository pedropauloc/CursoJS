function triangulo(ladoA, ladoB, ladoC) {
    if(ladoA == ladoB && ladoA == ladoC && ladoB == ladoC) {
        console.log('Equilátero: Os três lados são iguais')
    } else if(ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        console.log('Isósceles: Dois lados iguais')
    } else {
        console.log('Escaleno: Todos os lados são diferentes')
    }

}

//Equilátero
triangulo(1, 1, 1)
//Isósceles
triangulo(1, 1, 3)
triangulo(3, 2, 3)
triangulo(5, 6, 6)
// Escaleno
triangulo(1, 2, 3)
triangulo(5, 2, 3)
triangulo(5, 1, 3)

