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

    }

}


function  errorValidation(input, message) {


    const formControl = input.parentElement;


    formControl.className = 'form-control error'


}