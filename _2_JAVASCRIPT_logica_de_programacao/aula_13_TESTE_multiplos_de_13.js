function multiplosTreze(valor_1, valor_2) {

    let soma =0;
    let start = 0;
    let end = 0;

    if(valor_1 > valor_2) {
        start = valor_2;
        end = valor_1;
    } else {
        start = valor_1;
        end = valor_2;
    }

    for (let cont = start; cont <= end; cont++) {
        if(cont % 13 != 0){
            soma += cont;
        }
    }
    
    return soma;
}



console.log(multiplosTreze(200, 100));