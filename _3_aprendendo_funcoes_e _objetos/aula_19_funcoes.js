function calcular1() {
    console.log('Calcular 1');
}

const calcular2 = function() {
    console.log('Calcular 2');
    return 53252;
}

const calcular3 = (funcao) => {
    console.log('Calcular 3');
    return funcao();
}

console.log('Resultado:', calcular3(calcular2))