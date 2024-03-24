const lista = [ 
    {
        nome: 'José',
        idade: 21
    },
    {
        nome: 'João',
        idade: 42
    },
    {
        nome: 'Maria',
        idade: 23
    },
    {
        nome: 'Gabriela',
        idade: 23
    },
    {
        nome: 'Feranada',
        idade: 65
    },
    {
        nome: 'André',
        idade: 69
    },
    {
        nome: 'Heitor',
        idade: 32
    },
    {
        nome: 'Gustavo',
        idade: 64
    },
    {
        nome: 'Sandra',
        idade: 33
    }
]

for(let cont = 0; cont < lista.length; cont++) {
    console.log(lista[cont])
}

lista.forEach((objeto) => console.log(objeto));
 
let somaDasIdades = 0;

const somadorDeIdades = (objeto) => {
    somaDasIdades += objeto.idade;
}

lista.forEach(somadorDeIdades);

/*
lista.forEach((objeto) =>{
    somaDasIdades += objeto.idade;

})
*/

console.log(somaDasIdades);