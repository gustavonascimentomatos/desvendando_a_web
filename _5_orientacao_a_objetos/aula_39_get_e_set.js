class Usuario {  

    constructor(nome, email, senha) {

        Object.defineProperty(this, 'nome',{
            value: nome,
            writable: false, // Habilita ou desabilita a edição direta com: usuario.nome = 'novo nome'
            configurable: false, // Habilita ou desabilita deletar ou alterar com um novo defineProperty
            enumerable: true // Habilita ou desabilita a exibição no objeto
        })

        Object.defineProperties(this, {
            nome:{
                get: () => nome,
                set: (value) => nome = value
            },
            senha: {
                get: () => senha,
                set: (value) => {
                    if(value.length < 4){
                        throw new TypeError('Mínimo 4 caracteres')
                    }
                }
            },
            email:{
                get: () => email,
                set: (value) => email = value
            }
        })
    }
}

const usuario = new Usuario('Gustavo', 'matos@email.com', 'senha@123');
console.log(usuario);