const objetoQualquerOriginal = {
    abc: 'CBA',
    def: 'CBAFED',
    ghi: 'CBAFEDIHG',
    jkl: 'CBAFEDIHGLKJ',
    mno: 'CBAFEDIHGLKJPNM',
    final: 'FINAL DO OBJETO ORIGINAL'
}

const objetoQualquerCopia1 = {
    abc: objetoQualquerOriginal.abc,
    def: objetoQualquerOriginal.def,
    ghi: objetoQualquerOriginal.ghi,
    jkl: objetoQualquerOriginal.jkl,
    mno: objetoQualquerOriginal.mno,
    final: 'FINAL DO OBJETO COPIA 1'
}

const objetoQualquerCopia2 = {
    ...objetoQualquerOriginal,
    final: 'FINAL DO OBJETO COPIA 2'
}

const lista1 = [60, 70, 80, 90, 100]
const lista2 = [10, 20, 30, 40, 50]


const lista3 = [...lista2, ...lista1]

console.log(objetoQualquerOriginal);
console.log(objetoQualquerCopia1);
console.log(objetoQualquerCopia2);
console.log(lista3);