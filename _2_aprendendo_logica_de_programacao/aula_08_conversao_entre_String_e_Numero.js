const salario_number = 1003.4;
const salario_stirng = '1003.4';

console.log('Salario:', salario_number.toFixed(2));
console.log('Salario:', Number(salario_stirng).toFixed(2));

var salario_formatado = salario_number.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
console.log('Salario formatado:', salario_formatado)