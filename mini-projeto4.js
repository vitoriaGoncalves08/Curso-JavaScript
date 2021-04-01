//Velocidade máxima de até 70km
//a cada 5 km acima do limite você ganha 1 ponto na carteira
//Math.floor()
//caso pontos maior que 12 -> "carteira suspendida"

verificarVelocidade(130);

function verificarVelocidade(velocidade){
    const valorVelocidadeMax = 70; 
    const kmPorPonto = 5;
    const semCarteira = 12;

    if(velocidade <= valorVelocidadeMax){
        console.log('ok');
    }
    else{
        const pontos = Math.floor((velocidade - valorVelocidadeMax) / kmPorPonto);
        if(pontos >= semCarteira){
            console.log('Carteira suspensa');
        }else{
            console.log('Pontos: ', pontos);
        }
    }
}