//Criar um método para ler propriedades de um objeto e 
//Exibir somente as propriedades do tipo string que estão nesse projeto

const filme = {
    titulo: 'Vingadores',
    ano: 2018,
    diretor: 'Robbin',
    personagem: 'Thor'
}

exibirPorpriedades(filme);

function exibirPorpriedades(obj){
    for(prop in obj){//interar nas propriedades do objeto, ex: titulo, ano e obj[prop] aprensenta o campo e o valor
        if(typeof obj[prop] === 'string'){
            console.log(prop, obj[prop]);
        }
    }
}