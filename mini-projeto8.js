//Exercício Nota Escolar
//Obter a média a partir de um array

//0-59:F
//60-69:D
//70-79:C
//80-89:D
//90-100:A
const array =[100,90,80];

console.log(mediaDoAluno(array));

function mediaDoAluno(notas){
    const media = calculoMedia(notas);

    if(media < 59){
        return'F';
    }
    else if(media >= 60 && media <= 69){
        return'D';
    }
    else if(media >= 70 && media <= 79){
        return'C';
    }
    else if(media >= 80 && media <= 89){
        return'D';
    }
    else if(media >= 90 && media <= 100){
        return'A';
    }
}

function calculoMedia(array){
    let soma = 0;
    
    for(let valor of array){
        soma += valor;
    }
    
    return soma/(array.length);
}