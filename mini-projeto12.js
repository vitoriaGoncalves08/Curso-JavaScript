//Igualdade de Objetos
//Comparando

function Endereco(rua, cidade, cep){
    this.rua = rua,
    this,cidade = cidade,
    this.cep = cep
}

const endereco1 = new Endereco('a','b','c');
const endereço2 = new Endereco('a','b','c');

function saoIguais(endereco1, endereço2){
    //comparar se as propriedades são iguais
    return endereco1.rua === endereço2.rua && endereco1.cidade === endereço2.cidade && endereco1.cep === endereço2.cep;
    
}
console.log(saoIguais(endereco1, endereço2));


function temEnderecoMemoriaIguais(endereco1, endereço2){
    //comparando se a areferência do objeto aponta para o mesmo local na memória

    return endereco1 === endereço2;

}

console.log(temEnderecoMemoriaIguais(endereco1, endereço2));
