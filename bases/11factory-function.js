
//FACTORY FUNCTIONS -------------------------------------------------------------------------------------------------
//Funções de fábrica
//camelCase umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular('ZENFONE', 5.5, 5000);
console.log(celular1); 