//ARROW FUNCTIONS
const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}
];

console.log(marcas.find((marca) => marca.nome === 'a'));

//Exercício
const frutas =[
    {nome: 'uva', quantidade: 4},
    {nome: 'maça', quantidade: 2},
    {nome: 'pêra', quantidade: 6}
];

console.log(frutas.find((fruta) => fruta.nome === 'uva' && fruta.quantidade === 4));