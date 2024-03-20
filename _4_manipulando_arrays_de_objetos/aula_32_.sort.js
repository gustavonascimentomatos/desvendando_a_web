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

const ordenaPorIdade = (a, b) => {
    if(a.idade < b.idade) {
        return -1;
    }
    if(a.idade > b.idade) {
        return 1;
    }
    return 0;
}

const ordenaPorNome = (a, b) => {
    if(a.nome.toUpperCase() < b.nome.toUpperCase()) {
        return -1;
    }
    if(a.nome.toUpperCase() > b.nome.toUpperCase()) {
        return 1;
    }
    return 0;
}

lista.sort(ordenaPorIdade);
lista.sort(ordenaPorNome);


console.log(lista)