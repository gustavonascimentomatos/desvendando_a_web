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

const encontrarPessoaComMaisDe30 = (pessoa) => pessoa.idade > 30;
const encontrarPessoaPorNome = (pessoa) => pessoa.nome === 'Gustavo';

const pessoaComMaisDe30 = lista.find(encontrarPessoaComMaisDe30);
const pessoaNomeEncontrado = lista.find(encontrarPessoaPorNome);

console.log(pessoaComMaisDe30);
console.log(pessoaNomeEncontrado); 