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

/*
const pessoa = {
    jose: {
        idade: 54
    },
    joao: {
        idade: 65
    }
}
*/


const funcaoReduce = (acumulador, objeto) =>{
    return { // 1ª Chave refere-se ao acumulador vazio no caso
        ...acumulador, // Os '...acumulador' indicam que ele deve manter os dados adiocionados ao acumulador
        [objeto.nome]: { // Define a 'chave' que será utilizada para este objeto
            ...objeto
        }
    }
}

const funcaoReduceArray = (acumulador, objeto) => {
    acumulador.push(objeto.idade);

    return acumulador;
}

const idadesPessoasArray = lista.reduce(funcaoReduceArray, [])
const pessoas1 = lista.reduce(funcaoReduce, {}) // 1ª Parâmetro é a função - 2º Parâmetro é como deve começar o a função, no exemplo o acumulador vazio 
const pessoas2 = lista.reduce(funcaoReduce, { Matos: { nome: 'Matos', idade: 28}})// 1ª Parâmetro é a função - 2º Parâmetro é como deve começar o a função, no exemplo já com um objeto

console.log(pessoas1);
console.log(pessoas1.Gustavo);
console.log(pessoas2);
console.log(idadesPessoasArray);