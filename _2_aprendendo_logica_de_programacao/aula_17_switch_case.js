function switchCase(key){
    switch (key) {
        case 'GUSTAVO':
        case 'MATOS':
            console.log('Você selecionou: Gustavo')
            break;
        case 'JOSE':
            console.log('Você selecionou: Jose')
            break;
        case 'JOAO':
            console.log('Você selecionou: Joao')
            break;
        default:
            console.log('Voce selecionou outro')
            break;
    }
}

switchCase('Gustavo'.toUpperCase())