const lista = [
    {
        nome: 'José',
        idade: 21
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

const converterObjeto = (objeto) => {
    return objeto.nome;
}

const converterObjeto2 = (objeto) => {
    return {
        nome: objeto.nome,
        idade: objeto.idade,
        nomeIdade: `${objeto.nome} ${objeto.idade}`
    }
}

const converterObjeto3 = (objeto) => {
    return {
        ...objeto, //Retorna todos os dados dos objetos
        idade: `${objeto.idade} ${objeto.nome}`, // Caso o atributo já exista o mesmo será substituído
        nomeIdade: `${objeto.nome} ${objeto.idade}`
    }
}

console.log(lista.map(converterObjeto));
console.log(lista.map(converterObjeto2));
console.log(lista.map(converterObjeto3));