let entrada = 8;
const QUANTIDADE = 6;

function calcula6pares(entrada){
    let contador_pares = 0;
    do {
        if(entrada % 2 !== 0) {
            console.log(entrada)
            contador_pares ++;
            entrada += 1;
        } else {
            entrada += 1;
        }
    } while (contador_pares < QUANTIDADE);
}

calcula6pares(1);