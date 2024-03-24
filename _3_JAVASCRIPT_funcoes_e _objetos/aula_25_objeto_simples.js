const jose = {
    idade: 35,
    peso: 80,
    nome: 'João',
    genero: 'Masculino',
    nacionalidade: 'Brasileiro',
    endereco: 'Rua dos Bobos',
    numero: 0,
    pais: 'Brasil',
    temFilhos: true,
 }

const exibirInformacoes = (pessoa) => {
    console.log(`Peso do(a) ${pessoa.nome}:`, pessoa.peso);
    console.log(`Idade do(a) ${pessoa.nome}:`, pessoa.idade);
    console.log(`Endereço do(a) ${pessoa.nome}:`, pessoa.endereco);
 }

const exibirInformacoes2 = (pessoa, informacao) => {
    console.log(`${informacao} do(a) ${pessoa.nome}: ${pessoa[informacao]}`)
}

exibirInformacoes(jose);
exibirInformacoes2(jose, 'pais');