"use strict";

var list = [1, 2, 3, 4, 5]; // quando a funccao inter so tem uma instacao  a ser exutada
// ela poder ser ecrita da forma abaixo

var newList = list.map(function (item) {
  return item * 2;
});
console.log(newList);
