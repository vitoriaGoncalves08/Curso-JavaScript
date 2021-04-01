//CONSTRUCTOR FUNCTION----------------------------------------------------------------------------------------------
//PASCAL CASE - UmDoisTresQuatro
function Celular(marcaCelular, marcaCelular, capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = marcaCelular 
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function(){
        console.log("Fazendo LIgação...");
    }
}
const celular = new Celular('MOTOROLA', 6.6, 5000);
console.log(celular);

function Notebook(polegadas,tipo,preco,status){
    this.polegadas = polegadas,
    this.tipo = tipo,
    this.preco = preco,
    this.status = status,
    this.disponivel = function(){
        console.log("Está disponível...");
   
    }
}
const not = new Notebook (16.5, 'GAMER', 4000, true);
console.log(not); 