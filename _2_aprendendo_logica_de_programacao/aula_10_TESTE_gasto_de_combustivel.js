
const AUTONOMIA_AUTOMOVEL = 12;

function calculaConsumo(p_tempo, p_velocidade) {
    const distancia = (p_tempo * p_velocidade);
    const consumototal = (distancia / AUTONOMIA_AUTOMOVEL);

    return consumototal.toFixed(3);
}

console.log(calculaConsumo(10, 85));
console.log(calculaConsumo(2, 92));
console.log(calculaConsumo(22, 67));