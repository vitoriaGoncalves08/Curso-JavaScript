//INTERANDO UM ARRAY
const numeros = [1,2,3,4,5];

for(numero of numeros){
    console.log(numero);
}

//foreach
numeros.forEach(function(numero){
    console.log(numero);
});

//foreach com arrow function
numeros.forEach((numero, indice) => console.log(numero, indice))

//Exercício
const coisas = ['caneta', 'lápis', 'fone'];

for(coisa of coisas){
    console.log(coisa);
}

coisas.forEach(function(coisa, indice){
    console.log(coisa, indice);
});

coisas.forEach((coisa) => console.log(coisa))

