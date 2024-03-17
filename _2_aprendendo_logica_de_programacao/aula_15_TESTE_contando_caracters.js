process.stdin.setEncoding('utf-8');

let maiorSting ='';
let resultado = [];

function contarCaracteres(valor){
    let retorno = '';
    const removeEnter = valor.replace('\n','');
    const separarEmArray = removeEnter.split(' ');

    for (let cont = 0; cont < separarEmArray.length; cont++) {
        if(cont == 0){
            retorno = `${separarEmArray[cont].length}`
        } else {
            retorno = `${retorno}-${separarEmArray[cont].length}`
        }
    }

    if(separarEmArray[cont] >= maiorSting) {
        maiorSting = separarEmArray[cont]
    }

    return retorno;
}

process.stdin.on('data', function(data){
    if(data == 0) {
        process.stdin.pause();
    }

    resultado.push(contarCaracteres(data))
}) 


for (let cont = 0; cont < resultado.length; cont++){
    console.log(resultado[cont])
}

console.log(`The biggest word: ${maiorSting}`)