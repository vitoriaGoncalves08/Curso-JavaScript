//OPERADOR SPREAD
const primeiro = [1,2,3];
const segundo = [4,5,6];

//const combinado = primeiro.concat(segundo);
const combinado = [...primeiro,'a',...segundo,'a'];
console.log(combinado);

//const cortado = combinado.slice();
//clonando
const clonado = [...combinado];
console.log(clonado);

//Exercício
const a1 = [1,2,3];
const a2 = [4,5,6];

const juncao = [...a1,'%',...a2];
console.log(juncao);