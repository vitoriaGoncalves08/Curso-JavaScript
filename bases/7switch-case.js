//SWITCH ..CASE----------------------------------------------------------------------------------------------------
let permissao = 'doido'; //comum, gerente, diretor

switch(permissao){
    case 'comum':
        console.log('usuário comum');
        break;
    case 'gerente':
        console.log('usuário gerente');
        break;
    case 'diretor':
        console.log('usuário diretor');
        break;
    default:
        console.log('usuário não reconhecido!');
}