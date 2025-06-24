$(function() {

    //Adicionamos uma classe dinamicamente.
     $('.box1').addClass('minhaClasse');

     //Rmovendo a classe
     //$('.minhaClasse').remove();

     $('.box1').removeClass('minhaClasse');

     //Função find

     var el = $('.box1').find('.child1').find('.child2');
     el.css('color','red');

     //Função manipular atributo

    alert( $('minhatag').attr('meuattr','outrovalor'));

     
});