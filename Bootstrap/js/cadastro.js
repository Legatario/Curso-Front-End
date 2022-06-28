const nome = document.querySelector('nome');
const email= document.querySelector('email');
const tel= document.querySelector('tel');
const endereco= document.querySelector('#endereco');
const numero= document.querySelector('numero');
const complemento= document.querySelector('complemento');
const bairro= document.querySelector('bairro');
const cidade= document.querySelector('cidade');
const cep= document.querySelector('cep');
const estado= document.querySelector('estado');
const informacoes= document.querySelector('informacoes');
const promocionais= document.querySelector('promocionais');





document.querySelector("form").addEventListener("submit",event =>{

    event.preventDefault()
    


    nomeValidation()
})






function  nomeValidation(){


        alert("Cadastro realizado com sucesso");

        document.getElementById('nome').value="";
        document.getElementById('email').value="";
        document.getElementById('tel').value="";
        document.getElementById('endereco').value="";
        document.getElementById('numero').value="";
        document.getElementById('complemento').value="";
        document.getElementById('bairro').value="";
        document.getElementById('cidade').value="";
        document.getElementById('cep').value="";
        document.getElementById('estado').value="";
        document.getElementById('informacoes').value="";

        const checkbox =document.getElementById('promocionais');
        checkbox.checked=false;
        


}


