"use strict";

var nome = {
  nome: 'kleyson'
}; // reatribuicao de valor

nome.nome = 'castro';
var list = [1, 2, 3, 4, 5, 6]; // map, 2 parametros, 1 o intem no array percorrido, 2 o indice.

var novo = list.map(function (intem, index) {
  return intem + index;
}); // soma dos elementos de um retor

var novo2 = list.reduce(function (total, prox) {
  return total + prox;
}); // filtro, funcao filter() retorma os valores que satisfazem a
// condicao verdadeira da funcao interna

var filter = list.filter(function (item) {
  return item % 2 === 0;
}); // procura item e o retorna o proprio elemento se encontrar

var procura = list.find(function (intem) {
  return intem === 10;
});
console.log(procura);
