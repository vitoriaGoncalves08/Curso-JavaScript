//SEGURANÇA VIRTUAL

function VerificarEntrada(){
    NomeConvidado = document.getElementById('nome').value;
    const convidadosVitória = ['Thayna', 'Jubileu', 'Fransmiller', 'Poze'];
   
    if(convidadosVitória.includes(NomeConvidado)){
        document.getElementById('PermissaoDeEntrada').innerText = "Você pode entrar!";
    }else{
        document.getElementById('PermissaoDeEntrada').innerText = "Você NÃO pode entrar!";
    }
}
