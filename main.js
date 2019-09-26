// class list criada

class Data{
    constructor() {
        this.data = [];
    }

    add(data) {
        this.data.push(data);
        console.log('novo elemento');
    }
} // fim  da class Data <====

class List extends Data {


    }// fim da class List   <====

// Objeto instaciado da class List
const novaLista = new List();

document.getElementById('bt').onclick = function() {
    novaLista.add();
};