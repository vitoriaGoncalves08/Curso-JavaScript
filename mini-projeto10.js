//Criar função para mostrar os números primos

//Primos
//Compostos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    
    for(let num = 2; num <= limite; num++){
        if(NumeroPrimo(num)){
            console.log(num);
        }
    }
}

    function NumeroPrimo(num){
        for(let divisor = 2; divisor < num; divisor++){
            if(num % divisor === 0){
                return false;
            }
        }
        return true;
    }

