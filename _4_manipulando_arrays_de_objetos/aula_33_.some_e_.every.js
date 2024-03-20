const lista = [
    {
        nome: 'José',
        idade: 99
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

const temIdadeMaiorQue50Some = (pessoas) => {
    return pessoas.idade > 50;
}

const temIdadeMaiorQue50Every = (pessoas) => {
    return pessoas.idade > 50;
}

const maiorQue50Some = lista.some(temIdadeMaiorQue50Some);
const maiorQue50Every = lista.every(temIdadeMaiorQue50Every);

console.log(maiorQue50Some);
console.log(maiorQue50Every);