//ENCONTRANDO ELEMENTOS(PRIMITIVOS

const numeros = [1,2,3,1,4];

numeros.indexOf(2);
console.log(numeros.indexOf(3));//pega o valor passado e vê se está contido no array, se estiver mostra o índice, senão mostra -1
console.log(numeros.lastIndexOf(1));//pega a última ocorrência do núm repetido
console.log(numeros.indexOf(2) !== -1);

console.log(numeros.includes(2));//melhor

//Exercício
const multDez = [10,20,30,40,50,10];

console.log(multDez.indexOf(50));
console.log(multDez.lastIndexOf(10));
console.log(multDez.includes(70));