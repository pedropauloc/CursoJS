// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',  
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa
console.log(nome, idade)

const { nome: n, idade: i} = pessoa // atribuindo outro nome a variavel
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa // quando a variavel não está definida no objeto retorna como undefined
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

// se tentar acessar atributo de forma aninhada, tem que ter o caminho ex:
const { conta: { ag, num } } = pessoa
console.log(ag, num) 