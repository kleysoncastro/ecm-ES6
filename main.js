// rest, rest fica com o resta de uma variavel/objeto

const pessoa = {
    nome: 'kleyson',
    idade: 26,
    status: 'casado'
}
// o operador ... guada os dados restanted depois da destruracao.
const {nome, ...restante} = pessoa;

// rest se aplica tambem em vetor

const vetor = [1, 2, 3, 4, 5];
// as variaves 'a' e 'b' receberam os valores respctivos e 'c' o resto
const [a, b, ...c] = vetor;



// rest em funcoes
// os dois primeiros parametros ficma em 'a' e 'b' e os depis em c
function soma(a, b, ...c){
      return c;
}
console.log(soma(1, 2, 3, 4))

