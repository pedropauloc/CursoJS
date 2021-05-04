console.log(soma(3, 4))

// function declaration - dessa forma antes mesmo de declarar ela eu posso chama-la
// nas demais formas não é possivel
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x -y
}

// named function expression
const mult = function mult(x, y) {
    return x * y
}