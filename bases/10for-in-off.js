//LAÇO FOR..IN serve em um array
const pessoafi = {
    nome: 'Vic',
    idade: 17
};

for(let chave in pessoafi){
    console.log(chave, pessoafi['nome']);
}

const cores = ['Vermelho', 'azul', 'Verde'];
for (let indice in cores){
    console.log(indice, cores[indice]);
}

//LAÇO FOR..OF
for(let cor of cores){
    console.log(cor);
}
