//NATUREZA DINÂMICA DE OBJETOS---------------------------------------------------------------------------------------
const mouse = {
    cor: 'red',
    marca: 'dazz'
}
mouse.velocidade = 500;
mouse.trocarDPI = function(){
    console.log('mudando DPI...');
};
delete mouse.velocidade;
delete mouse.trocarDPI;
console.log(mouse); 

//CLONANDO OBJETOS -------------------------------------------------------------------------------------------------
const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela:{
        vertical:155,
        horizontal: 75
    }
}
const novoObjeto = Object.assign({
    teste:400
}, celular);
console.log(novoObjeto);

const objeto2 = {...celular};
console.log(objeto2);