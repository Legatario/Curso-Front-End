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


    $('body').on('submit', '.modal-body .form', function(e){
        
        e.preventDefault()

        const name = $('#nome')
        const email = $('#email')


        validade(name)
        validade(email)

        if(name.hasClass('invalid') ||  email.hasClass('invalid')){

            console.log('verificar campos obrigatorios')
            return false
        }

        else {


            $('#modelId').removeClass('show');
            $('body').removeClass("modal-open");
            $("body").removeAttr("style");
            $('.modal-backdrop').remove();

            // return true
            alert('cadastro realizado');
        }
        

   
    })

    function validade (elem){

        if( elem.val() == ''){

            console.log('o campo é obrigratorio' + elem.attr('name') + 'é obrigatorio')


            elem.parent().find('.text-muted').show()

            elem.addClass('invalid')

            return false
        }
        
        else {

            elem.removeClass('invalid')
            elem.parent().find('.text-muted').hide()
        }

    }


    $('body').on('blur', '#email', function(){

        validade($(this))

    })
    

    $('body').on('blur', '#nome', function(){

           validade($(this))

    })


    $('body').on('blur', '#date', function(){

        validade($(this))
        $('#data').mask('00/00/0000');

    })

    
    $('body').on('blur', '#phone', function(){

        validade($(this))
        $('#phone').mask('(00) 00000-0000');

    })


    
    $('body').on('blur', '#cep', function(){

        validade($(this))
        $('#cep').mask('00000-000');

    })


    
    $('body').on('blur', '#cpf', function(){

        validade($(this))
        $('#cpf').mask('000.000.000-00');

    })

    $('body').on('shown.bs.modal', function () {

        $('#time').mask('00:00:00');
        $('#cep').mask('00000-000');
        $('#phone').mask('(00) 00000-0000');
        $('#cpf').mask('000.000.000-00');
    
    });


})



jQuery(function($){

    let titulos = $('h4')
    let itens = $('.featured-item')
    let destaques = $('#featured')

})