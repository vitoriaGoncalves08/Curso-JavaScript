//ENCONTRANDO ELEMENTOS(TIPO DE REFERÊNCIA) - OBJETOS não usa includes normal

const marcas = [
    {id: 1, nome: 'a'},
    {id: 2, nome: 'b'}//duplicar alt+shift+seta baixo
];

console.log(marcas.includes({id: 1, nome: 'a'}));

const marca = marcas.find(function(marca){
    return marca.nome === 'a';
});

console.log(marca);

//Exercício
const frutas = [
    {nome: 'uva', quantidade: 4},
    {nome: 'maça', quantidade: 2},
    {nome: 'pêra', quantidade: 6}
];

const fruta = frutas.find(function(fruta){
    return fruta.nome === 'maça' && fruta.quantidade === 2;
});

console.log(fruta);