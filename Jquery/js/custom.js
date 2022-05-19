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

    // ouvinte de elementos
    
    $('.nav-modal-open').on('click', function(e){

        e.preventDefault();

        let elem = $(this).attr('rel')

        $('.modal-body').html($('#'+elem).html())
        $('.modal-header h5.modal-title').html($(this).text())

        let myModal = new bootstrap.Modal($('#modelId'))

        myModal.show()
    })


    function validade(elem){

        if(elem.val()==''){
    
            console.log('o campo de '+elem.attr('name')+'é obrigatorio')
            elem.parent().find('.text-muted').show()
            elem.addClass('invalid')
    
            return false
        }
        else{
            elem.parent().find('text-muted').hide()
            elem.removeClass('invalid')
        }
    }


    

})



jQuery(function($){

    let titulos = $('h4')
    let itens = $('.featured-item')
    let destaques = $('#featured')

})


    