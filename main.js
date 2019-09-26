const membro = {
    nome: 'kleyson',
    idade: 26,
    sexo: 'M',
    endereco: {
            cidade: 'sao jose',
            bairro: 'Ipiranga',
            casa: 360,
    },
}


function mostra({nome, endereco:{casa}}) {
console.log(nome)
}

mostra(membro);