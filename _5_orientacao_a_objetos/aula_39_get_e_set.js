class Usuario {  

    constructor(nome, email, senha) {

        Object.defineProperties(this, { 
            nome: {
                get: () => nome,
                set: (value) => nome = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if (value.length < 4) {
                       throw new TypeError('Mínimo 4 caracteres') 
                    }
                    senha = value
                }
            },
            email: {
                get: () => email,
                set: (value) => email = value
            }
        })
    }
}

const usuario = new Usuario('Gustavo', 'matos@email.com', 'senha@123');

console.log(usuario);