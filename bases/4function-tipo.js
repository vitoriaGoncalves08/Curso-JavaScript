//FUNCTIONS--------------------------------------------------------------------------------------------------------
//Verbo + Substantivo
let corSite = "Azul";

function resetaCor(cor, tonalidade){
    corSite = cor +' '+tonalidade;
};

console.log(corSite);
resetaCor("verde", "claro");
console.log(corSite);

let s = true;
function lampada(status){
    s = status;
}
lampada(true);
console.log(s);

//TIPOS DE FUNÇÃO-------------------------------------------------------------------------------------------------
//realiza uma tarefa, não devolve nada
function dizerNome(){
    console.log('jhonatan');
}
dizerNome();

//faz uma tarefa e retorna algo
function MultiplicarPorDois(valor){
    return valor * 2;
}
//console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(5);
console.log(resultado);