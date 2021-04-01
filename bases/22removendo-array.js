//REMOVENDO ELEMENTOS ARRAY
const numeros = [1,2,3,4,5,6];
numeros.push();
numeros.unshift();
numeros.splice();


//Início
const primeiro = numeros.shift();
console.log(primeiro);
console.log(numeros);

//Meio
const meio = numeros.splice(2,1);
console.log(meio);
console.log(numeros);

//Final
const ultimo = numeros.pop();
console.log(ultimo);
console.log(numeros);


console.log('EXERCICIO-----------');
//Exercício
const multCinco = [5,10,15,20,25];

const primeiroM = multCinco.shift();
console.log(primeiroM);
console.log(multCinco);

const meioM = multCinco.splice(2,1);
console.log(meioM);
console.log(multCinco);

const finalM = multCinco.pop();
console.log(finalM);
console.log(multCinco);