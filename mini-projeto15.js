//Faixa de Preço
//é que vocÊ crie um array de objetos de faixa de preços que possa ser usado em um site igual o mercado livre

//Primeira Opção
let faixas = [
    {tooltip: 'até R$700', minimo: 0, máximo:700},
    {tooltip: 'de R$700 a R$ 1000', minimo: 700, máximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, máximo: 9999999}
];

//Segunda Opção(Factory Function)
function criarFaixaPreço(tooltip, minimo, maximo){
    return{
        tooltip,
        minimo,
        maximo
    }
}
    let faixas2 = [
        criarFaixaPreço('a', 1,100),
        criarFaixaPreço('b', 100,1000),
        criarFaixaPreço('c', 1000,10000),
    ]


    //Terceira opção (Constructor Fucntion)
    function FaixaPreco(tooltip, minimo,maximo){
        this.tooltip = tooltip,
        this.minimo = minimo,
        this.maximo = maximo
    }
    let faixas3 = [
        new FaixaPreco('d', 10, 20),
        new FaixaPreco('e', 20, 30),
        new FaixaPreco('f', 30, 40)
    ];

console.log(faixas);
console.log(faixas2);
console.log(faixas3);