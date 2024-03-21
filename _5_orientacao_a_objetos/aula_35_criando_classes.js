class Pessoa {
    nome;
    idade;
    filhos;

    quantidadeDeFilhos() {
        if(this.filhos) {
            return this.filhos.length;
        }

        return 0;
    }

    constructor(nome, idade, filhos){
        this.nome = nome;
        this.idade = idade;
        this.filhos = filhos;
    }
}

const filho1 = new Pessoa('Jose Nascimento Matos', 5)
const filho2 = new Pessoa('Maria Nascimento Matos', 4)

const pessoa = new Pessoa('Gustavo Nascimento Matos', 28, [filho1, filho2]);
const quantosFilhos = pessoa.quantidadeDeFilhos();

console.log(pessoa);
console.log(`Quantidade de filhos de "${pessoa.nome}": ${quantosFilhos}`);
console.log(`O filho(a) "${filho2.nome}" tem: ${filho2.quantidadeDeFilhos()} filhos(as)`)