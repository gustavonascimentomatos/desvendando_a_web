class Usuario {
    nome;
    email;
    senha;
    
    validarSenha(email, senha ) {
        return email + senha === this.nome;
    }

    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
}

class Administrador extends Usuario {
    permissoes;

    validarSenha(email, senha) {
        return email === this.email;
    }

    constructor(nome, email, senha, permissoes) {
        super(nome, email, senha)
        this.permissoes = permissoes;
    }
}

class Comprador extends Usuario{
    compras;
}

const comprador1 = new Comprador();
const administrador1 = new Administrador('Gustavo Matos', 'matos@email.com', 'senha@123', [1, 3]);
const usuario1 = new Usuario('Gustavo Matos', 'matos@email.com', 'senha@123')

console.log(usuario1.validarSenha('matos@email.com', 'senha@123'));
console.log(administrador1.validarSenha('matos@email.com', 'senha@123'));