const form = document.getElementById('form')
const nome = document.getElementById('nome')
const email= document.getElementById('email')


document.querySelector("form").addEventListener("submit",event =>{

    event.preventDefault()
})






function  nomeValidation(){

    const nomeValue = nome.value.trim()
    const small = form.querySelector(input)

if(nomeValue === ''){

    small.innerText = 'Campo obrigatorio'
} 

}





