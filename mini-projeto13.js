//Objeto Postagem de Blog
//Eu quero que você crie neste exercício um objeto de postagem de blog que vai conteras seguintes propriedades:
//postagem
/* titulo
mensagem
autor
vizualizações
comentários
    (autor, mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'JavaScript',
    mensagem:'msg',
    autor:'vitória',
    vizualizacoes:12,
    comentarios : [
        {autor: 'eu', mensagem: 'sla'},
        {autor: 'eu', mensagem: 'sla'}
    ],
    estaAoVivo: true
} 

console.log(postagem);