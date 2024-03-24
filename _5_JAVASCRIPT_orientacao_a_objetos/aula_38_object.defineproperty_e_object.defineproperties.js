
// Object.defineProperties" => Possível declarar várias propriedades
// Object.defineProperty" => Possível declarar apenas uma propriedade

const propriedadePadrao = (valorInicial) => ({
    value: valorInicial,
    writable: false, // Habilita ou desabilita a edição direta com: usuario.nome = 'novo nome'
    configurable: false, // Habilita ou desabilita deletar ou alterar com um novo defineProperty
    enumerable: true // Habilita ou desabilita a exibição no objeto
})

class Usuario {  

    constructor(nome, email, senha) {

        Object.defineProperty(this, 'nome',{
            value: nome,
            writable: false, // Habilita ou desabilita a edição direta com: usuario.nome = 'novo nome'
            configurable: false, // Habilita ou desabilita deletar ou alterar com um novo defineProperty
            enumerable: true // Habilita ou desabilita a exibição no objeto
        })

        Object.defineProperties(this, {
            senha: propriedadePadrao(senha),
            email: propriedadePadrao(email)
        })
    }
}

const usuario = new Usuario('Gustavo', 'matos@email.com', 'senha@123');

console.log(usuario);