//Contructor Function

//Criar um objeto postagem
//titulo, mensagem, autor, visualizacoes, comentarios, estaAoVivo

function postagem(titulo, mensagem, autor){
    this.titulo = titulo,
    this.mensagem = mensagem,
    this.autor = autor,
    this.visualizacoes = 0,
    this.comentarios = [],
    this.estaAoVivo = false
}


const post = new postagem('js', 'hihi', 'eu');
console.log(post);