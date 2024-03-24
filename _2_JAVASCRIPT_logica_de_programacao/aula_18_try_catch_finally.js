function calcular(valor) {
    if(valor == 0){
        throw new Error('O vlaor não pode ser 0 (Zero)')
    }
    return valor / 2;
}  

try {
    const resultado = calcular(4);
    console.log('Resultado:', resultado);
} catch (error) {
    console.log(error.message);
} finally {
    console.log('Finally, entrando no try ou no catch o finally é executdo!')
}