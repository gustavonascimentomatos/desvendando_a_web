class Usuario {
    nome;
    email;
    senha;
    
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

class Administrador extends Usuario {
    permissoes;

    constructor(nome, email, senha, permissoes) {
        super(nome, email, senha)
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario{
    compras;
}

const administrador1 = new Administrador('Gustavo Matos','matos@email.com', 'senha@123', [1, 3]);

console.log(administrador1)