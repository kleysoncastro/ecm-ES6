// class list criada
class List{
// costrutor da class, pode receber parametros
    constructor() {
        this.prod = [];
    }
// funcao da class, 
    listTados() {
        this.prod.push('novo elemento');
        console.log(this.prod);
    }
} // fim da class List   <====

// Objeto instaciado da class List
const novaLista = new List();

document.getElementById('bt').onclick = function() {
    novaLista.listTados();
};