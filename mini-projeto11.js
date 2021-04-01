//OBJETO ENDEREÇO
//Criar um objeto endereço que contém:
//Rua
//Cidade
//CEP
//exibirEndereço(endereço)

let endereco = {//pode ser alterado
    rua:'Maritaca',
    cidade: 'São Paulo',
    CEP:'123456-807'
};

function exibirEndereco(endereco){

    for(let chave in endereco){
        console.log(chave, endereco[chave]);
    }
}

exibirEndereco(endereco);