//Criar uma função somar que retorna a
//soma de todos os múltiplos de 3 e 5

//Múltiplos de 3
//3,6,9

//Múltiplos de 5
//5,10

//armazenas os múltiplos de 3, depois de 5 e somar

somar(10);
function somar(limite){
    let multiplos3 = 0;
    let multiplos5 = 0;

    for(let i = 1; i <= limite; i++){
        if(i % 3 === 0){
           multiplos3 += i;
        }
        if(i % 5 === 0){
            multiplos5 += i;
        }
    }
    console.log(multiplos3+multiplos5);


}