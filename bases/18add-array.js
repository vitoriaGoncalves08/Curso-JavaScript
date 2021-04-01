//Introdução a Arrays
//add novos elementos
//encontrar novos elementos
//remover elementos
//dividir elementos
//divivdir arrays
//combinar arrays

//ADICIONANDO ELEMENTOS NO ARRAY----------------------------------------------------------------------------------
const numeros = [1,2,3];

//Inserir no Início do array
numeros.unshift(0);
console.log(numeros);

//Meio
numeros.splice(1,0,'a');//Posição, QuantidadenumDeletado, susbstituto
console.log(numeros);

//Final
numeros.push(5);
console.log(numeros);

//Exercício
const vogais = ['e','o', 'u'];

vogais.unshift('a');
console.log(vogais);

vogais.splice(2, 0,'i');
console.log(vogais);

vogais.push('ão');
console.log(vogais);