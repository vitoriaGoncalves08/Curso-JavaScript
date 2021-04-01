//OPERADORES-------------------------------------------------------------------------------------------------------
//Comparação
//Lógicos
//Bitwise

//OPERADOR ARITMÉTICO(Matemáticos)
let salario = 100;
//+ - * / **num vezes ele msm


console.log(salario+salario);
console.log(salario-salario);
console.log(salario*salario);
console.log(salario/salario);
console.log(5**5);
//++ --
let idadeo = 18;
console.log(--idadeo);//opração acontece antes de fazer o resultado
console.log(++idadeo);

//OPERADOR DE ATRIBUIÇÃO =
let valorTecladoGamer = 100;

valorTecladoGamer -= valorTecladoGamer;
console.log(valorTecladoGamer);

//OPERADOR DE IGUALDADE
//Igualdade estrita
console.log(1 === 1);//comparando valores e tipo
console.log('1' === 1);

//Igualdade solta
console.log(1 == 1);
console.log('1' == 1);

//OPERADO TERNÁRIO---IF ELSE NO LET
let pontos = 140;
let tipo = pontos > 100? 'premium' : 'comum';
console.log(tipo);

//OPERADORES LÓGICOS
//(&&) (||) (!)
let maiorIdade = false;
let possuiCarteiraTrabalho = false;
let podeAplicar = maiorIdade || possuiCarteiraTrabalho;

console.log('pode aplicar: ',podeAplicar);
let candidatoRecusado = !podeAplicar;
console.log('candidato recusado',candidatoRecusado);

//COMPARAÇÃO NÃO BOOLEAN
//Falsy:
//undefined, null, 0, false, '', NaN - not a number

//Truthy:
//o que não é Flasy

let corPersonalizada ='';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;
console.log(corPerfil);