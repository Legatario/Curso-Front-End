const form = document.getElementById('form')
const Nome = document.getElementById('Nome')
const email= document.getElementById('email')
const password = document.getElementById('senha')
const password2 = document.getElementById('senha2')

form.addEventListener('submit', (e) => {

    e.preventDefault()

    checkInputs()
})


function checkInputs() {

    const nomeValue = Nome.value.trim()
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()
    const password2Value = password2.value.trim()

    if(nomeValue === ''){

        errorValidation(Nome, 'Preencha esse campo')
    } 
    
    else {

        successValidation(Nome)

    }

    if(emailValue === ''){

        errorValidation(email, 'Preencha esse campo')
    }

    else{

        successValidation(email)
    }

    if(passwordValue === ''){

        errorValidation(senha, 'Preencha esse campo')
    }

    else if(passwordValue.length < 8){

        errorValidation(senha, 'A senha deve ter mais de 8 caracteres')
    }

    else{

        successValidation(senha)
    }

    if(password2Value === ''){

        errorValidation(senha2, "Preencha esse campo")
    }

    else if(password2Value !== passwordValue){

        errorValidation(senha2, 'As senhas não são as mesmas')

    }

    else{

        successValidation(senha2)
    }


}


function  errorValidation(input, message) {


    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message


    formControl.className = 'form-control error'


}

function successValidation(input){

    const formControl = input.parentElement;

    formControl.className = 'form-control success'
}