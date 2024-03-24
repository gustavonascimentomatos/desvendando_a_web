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

const funcaoReduce = (acumulador, objeto) =>{
    return { // 1ª Chave refere-se ao acumulador vazio no caso
        ...acumulador, // Os '...acumulador' indicam que ele deve manter os dados adiocionados ao acumulador
        [objeto.nome]: { // Define a 'chave' que será utilizada para este objeto
            ...objeto
        }
    }
}

const converteObjeto = (chave) => {
    return {
        nome: chave,
        idade: pessoas[chave].idade
    }
}

const pessoas = lista.reduce(funcaoReduce, {});
const chaves = Object.keys(pessoas);
const listaDeVolta = chaves.map(converteObjeto)

console.log(pessoas)
console.log(chaves)
console.log(lista)
console.log(listaDeVolta)