const fields = document.querySelectorAll("[required]")

function customValidation(event){

    const field = event.target

    field.setCustomValidity("Esse campo é obrigatorio")

}

for ( const field of fields) { 
     field.addEventListener("invalid", customValidation)
    }

   





document.querySelector("form").addEventListener("submit",event =>{

    event.preventDefault()
})

