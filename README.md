🧠 Manipulando Classes e Atributos com jQuery
Este projeto simples mostra como usar jQuery para adicionar e remover classes, encontrar elementos aninhados, e modificar atributos personalizados usando uma estrutura HTML comum.

🚧 O que esse projeto faz?
Adiciona e remove classes dinamicamente com jQuery.

Acessa elementos dentro de outros com .find().

Altera atributos de tags personalizadas.

Muda o estilo de um elemento com .css().

jQuery
js
Copiar
Editar
$(function() {
    // Adiciona uma classe dinamicamente
    $('.box1').addClass('minhaClasse');

    // Remove a classe adicionada
    $('.box1').removeClass('minhaClasse');

    // Encontra elementos internos e altera o estilo
    var el = $('.box1').find('.child1').find('.child2');
    el.css('color','red');

    // Altera o atributo e exibe seu valor
    alert($('minhatag').attr('meuattr', 'outrovalor'));
});

🧠 O que você aprende com esse exemplo?
Como usar jQuery para selecionar e modificar elementos.

Como navegar por elementos aninhados.

Como alterar atributos de tags HTML (inclusive personalizadas).

Como manipular classes dinamicamente.

