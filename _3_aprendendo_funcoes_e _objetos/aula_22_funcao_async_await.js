const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const aguardarComRetorno = async () => {
    await sleep(3000);
    return 30;
}

const aguardar = async () => {
    console.log('Linha 1:', 1 ** 2);

    const resultado = await aguardarComRetorno();
    console.log(resultado);
    
    //await sleep(3000);

    /*
    setTimeout(() =>{
        console.log('Linha do TimeOut: 1000ms')
    }, 1000)
    */

    console.log('Linha 2:', 2 ** 2);
    console.log('Linha 3:', 3 ** 2);
    console.log('Linha 4:', 4 ** 2);
    console.log('Linha 5:', 5 ** 2);
}

aguardar();