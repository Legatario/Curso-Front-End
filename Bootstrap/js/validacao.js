const fields = document.querySelectorAll("[required]")

function customValidation(event){

    const field = event.target

    function verifyErrors(){

        let foundError = false;

        for (const error in field.validity){

            if(error != "customError" && field.validity[error]){
                foundError = true
            }

        }
        return foundError;
    }

    const error = verifyErrors()

    if(error){
        field.setCustomValidity("Esse campo é obrigatorio")

    }

    else{
        field.setCustomValidity("")
    }


}

for ( const field of fields) { 
     field.addEventListener("invalid", customValidation)
    }

   

document.querySelector("form").addEventListener("submit",event =>{

    alert("mensagem enviada")
    event.preventDefault()
})

