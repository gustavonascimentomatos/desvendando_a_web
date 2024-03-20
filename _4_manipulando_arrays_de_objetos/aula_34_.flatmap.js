const lista = [
    {
        nome: 'José',
        idade: 21,
        cartoes: ['1231', '4329']
    },
    {
        nome: 'João',
        idade: 42,
        cartoes: ['1232', '4328']
    },
    {
        nome: 'Maria',
        idade: 23,
        cartoes: ['1233', '4327']
    },
    {
        nome: 'Gabriela',
        idade: 23,
        cartoes: ['1234', '4326']
    },
    {
        nome: 'Feranada',
        idade: 65,
        cartoes: ['1235', '4325']
    },
    {
        nome: 'André',
        idade: 69,
        cartoes: ['1236', '4324']
    },
    {
        nome: 'Heitor',
        idade: 32,
        cartoes: ['1237', '4323']
    },
    {
        nome: 'Gustavo',
        idade: 64,
        cartoes: ['1238', '4322']
    },
    {
        nome: 'Sandra',
        idade: 33,
        cartoes: ['1239', '4321']
    }
]

const cartoesMap = lista.map((cartao) => cartao.cartoes); //Retorna uma lista de lista de cartões
const cartoesFlatMap = lista.flatMap((cartao) => cartao.cartoes); //Retorna uma lista de cartões

console.log(cartoesMap);
console.log(cartoesFlatMap);
