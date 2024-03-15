const nome_1 = 'Gustavo Nascimento Matos';
const nome_2 = 'Bárbara Kássia Campos';
const nome_3 = '0123456789'

console.log(nome_1.length);
console.log(nome_1.concat(' e ').concat(nome_2)); // Mais lento
console.log(nome_1 + ' e ' + nome_2); // Mais rápido
console.log(`${nome_1} ${nome_2} ${nome_3}`);
console.log(nome_1.substring(1)); // Retorna a string a partir do índice definido
console.log(nome_3.substring(8, 5)); // Retorna do índice inicial a -1 do índice final (Maior valor -1)
console.log(nome_1.split(' ')); // Divide a string inteira onde encontrar o valor informado removendo tal valor
console.log(nome_1.toUpperCase()); // Transforma toda a string em caracteres maiúsculos
console.log(nome_1.toLowerCase()); // Transforma toda a string em caracteres minúsculos
console.log(nome_2.replace('Campos', 'Matos')); // Realiza uma troca entre os campos indicados