class Produto{
    
    constructor(nome, preco, descricao, codigo, quantidade_em_estoque){
        Object.defineProperties(this, {
            nome:{
                get: () => nome,
                set: (value) => nome = value
            },
            preco:{
                get: () => preco,
                set: (value) => preco = value
            },
            descricao: {
                get: () => descricao,
                set: (value) => descricao = value
            }, 
            codigo: {
                get: () => codigo,
                set: (value) => codigo = value
            },
            quantidade_em_estoque:{
                get: () => quantidade_em_estoque,
                set: (value) => quantidade_em_estoque = value
            },
        })
    }

    alteraPreco (novoPreco){
        if(novoPreco > 0){
            this.preco = novoPreco;
        } else {
            throw new Error('[ERRO] - Preço Inválido')
        }
    }

    adicionaNoEstoque(quantidadeAdicionada) {
        this.quantidade_em_estoque += quantidadeAdicionada;
    }

    removeNoEstoque(quantidadeRemovida) {
        const novoEstoque = this.quantidade_em_estoque - quantidadeRemovida;
        if (novoEstoque >= 0) {
            this.quantidade_em_estoque -= quantidadeRemovida;
        }else {
            throw new Error('[ERRO] - Estoque negativo!')
        }
        
    }
}

class Smartphone extends Produto{

    constructor(nome, preco, descricao, codigo, quantidade_em_estoque, marca, modelo, sistema_operacional){
        super(nome, preco, descricao, codigo, quantidade_em_estoque)
        Object.defineProperties(this, {
            marca: {
                get: () => marca,
                set: (value) => marca = value
            },
            modelo: {
                get: () => modelo,
                set: (value) => modelo = value
            },
            sistema_operacional: {
                get: () => sistema_operacional,
                set: (value) => sistema_operacional = value
            }
        })
    }

    exibeDescricao() {
        return `Nome: ${this.nome}\nPreco: ${this.preco}\nDescrição: ${this.descricao}\nCódigo: ${this.codigo}\nMarca: ${this.marca}\nModelp ${this.modelo}\nSistema Operacional: ${this.sistema_operacional}` 
    }
}

const smartphone = new Smartphone('Iphone', 2000, 'Iphone 12', 9812, 0, 'Aplle', '12', 'IOS 15')

smartphone.alteraPreco(4000);
smartphone.adicionaNoEstoque(20);
smartphone.removeNoEstoque(15);

console.log(smartphone.exibeDescricao())
