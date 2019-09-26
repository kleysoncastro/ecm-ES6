
//spread, spread junta basicamente estrutura de dados

const vetorA = [1, 2, 3, 4];
const vetorB = [5, 6, 7, 8]

// percorrera o vetorA e vetorB 
const vetor = [...vetorA, ...vetorB];


const pessoa = {

    nome: 'kleyson',
    sobreNome: 'castro',
    idade:26
}


// percorreo o objer pessoa e sobre escrevel a variavel sobreNome

const npesso = {...pessoa, sobreNome: 'Fonseca'}
console.log(npesso)