const lista = [ 
    {
        nome: 'José',
        idade: 21,
        exibir: true
    },
    {
        nome: 'João',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 23
    },
    {
        nome: 'Feranada',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    }
]

// .filter tem que retornar 'true' ou 'false'
// Caso o .filter seja indefinido temos que utilizar duas '!!' para fazer com que a o que for indefinido passe a ser falso.
const filtrarPessoaMaiorDe30 = (pessoa) => pessoa.idade > 30;
const filtraPessoaComExibir = (pessoa) => !!pessoa.exibir;

const listaFiltradaMaiorDe30 = lista.filter(filtrarPessoaMaiorDe30);
const listaFiltradaComExibir = lista.filter(filtraPessoaComExibir);

console.log(lista);
console.log(listaFiltradaMaiorDe30);
console.log(listaFiltradaComExibir);