$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    $('.featured-item a').addClass('btn btn-dark stretch-link')

    $('.featured-item h4').append('<span class="badge bg-secondary">Novo</span>')

    $('.featured-item h4').dblclick(function(){
        
        $(this).css({

            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100'
        })


    });

    $('.featured-item a').on('click',function(event){

        event.preventDefault();

        alert('Produto esgotado');
    })
})

jQuery(function($){

    let titulos = $('h4')
    let itens = $('.featured-item')
    let destaques = $('#featured')

})