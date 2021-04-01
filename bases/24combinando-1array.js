//COMBINANDO E CORTANDO ARRAYS
const primeiro = [{id:1}];
const segundo = [4,5,6];
primeiro[0].id = 10;
//Combinar
const combinado = primeiro.concat(segundo);
console.log(combinado);

//Dividir
const cortado = combinado.slice();//3 opções, inicial, final(nunca extrai o último valor do índice)
//um parametro tira ele, dois corta de um até o outro menos o último e sem parâmetro ele copia dos dados do array para outra variável
console.log(cortado);