const teste1 = (callback) => {
    setTimeout(() => {
        console.log('Teste 1');
    }, 2000)
}

const teste2 = (callback) => {
    setTimeout(() => {
        console.log('Teste 2');
        callback();
    }, 3000)
}

const teste3 = (callback) => {
    setTimeout(() => {
        console.log('Teste 3');
    }, 2500)
}

const teste4 = (callback) => {
    setTimeout(() => {
        console.log('Teste 4');
    }, 1500)
}

const funcaoCallBack = () => {
    console.log('Salvou o usuário')
}

teste1();
console.log(1 + 1);
teste2(funcaoCallBack);
teste3();
console.log(2 + 2);
teste4();