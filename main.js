$(document).ready(function() { // faz com que seja executado o que está dentro do escopo da função quando o doc estiver carregado
    /* console.log(document.querySelector('header button')); Este seria o modo de selecionar o botão do cabeçalho através de JavaScript */
    /*console.log($('header button')); //Este é o modo de selecionar o botão do header com jQuery*/
    /*$('header button').click(function(){
        alert('Botão Clicado');
    })*/
    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    $('form').on('submit', function(e){
        e.preventDefault();
        
        const enderecoDaNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${enderecoDaNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link" title="Ver imagem em tamanho real">
        <a href="${enderecoDaNovaImagem}" title="Ver imagem em tamanho real" target="_blank"/>
        Ver imagem em tamanho real</a></div>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(3000);
        $('#endereco-imagem-nova').val('');
    })
})