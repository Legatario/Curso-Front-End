// function calcularMedia( notas ) {

// somas as notas e divide pelo numero de notas
const calcularMedia = (notas) => {

    let soma = 0;
    for( c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;

}

let media; // escopo global

// function aprovacao( notas ) {
    // indica se o aluno foi aprovado ou reprovado com uma media de 8
    const aprovacao = ( notas ) => {

    let media = calcularMedia( notas ); // escopo da função

    let condicao = media >= 8 ? "aprovado" : "reprovado";

    return 'Média: ' + media + ' - Resultado: ' + condicao;

}


// Função Recursivas

// function contagemRegressiva(numero){

// faz uma contagem regressiva de um numero passado até chegar a 0

const contagemRegressiva = (numero) =>{

    console.log(numero);  
    
    let proximoNumero = numero - 1;

    if(proximoNumero > 0)
        contagemRegressiva(proximoNumero);

}

// contagemRegressiva(50);

/* 
 * Formulário envio de dados para cálculo da média 
 */
const formulario1 = document.getElementById('formulario-01');

if(formulario1)
    formulario1.addEventListener('submit', function( evento ){

        evento.preventDefault();
        evento.stopPropagation();

        if( this.getAttribute('class').match(/erro/) ) {
            return false;
        }
        
        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

            let numero = dados.get(key).match(/\d*/) ? Number(dados.get(key)) : 0; // é um número

            if(!isNaN(numero)) {
                notas.push(numero);
            }

            // coloca as notas do aluno em array []

        }

        console.log(notas);

        texto = aprovacao(notas)

        document.getElementById('resultado').innerHTML = texto;

        // imprime as notas do aluno
    });


// function validaCampo(elemento){

const validaCampo = (elemento) => {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        if(this.value == ""){
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em vermelho";
            this.classList.add('erro');
            this.parentNode.classList.add('erro');
            return false;

            // verifica se o campo mensagem foi preenchido se não houver coloca a classe erro
        } else {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro');
            this.parentNode.classList.remove('erro');
        }
        //caso esteja preenchido remove o campo erro

    });

}

// function validaCampoNumerico(elemento){

const validaCampoNumerico = (elemento) => {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        let numero = this.value.match(/^[\d]5-[\d]3/) ? this.value.replace(/-/, "") : this.value; 

        if(numero != "" && numero.match(/[0-9]*/) && numero >= 0 && numero <= 10){ // verifica se o campo numero é um numero maior e igual que 0 e menor que 11 e não esta vazio
            document.querySelector('.mensagem').innerHTML = ""; 
            this.classList.remove('erro'); // caso esteja remove o campo erro
            this.parentNode.classList.remove('erro'); 
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro'); // caso não esteja adiciona a classe erro
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}


// function validaEmail(elemento){

const validaEmail = (elemento) => {

    elemento.addEventListener('focusout', function(event) {

        event.preventDefault();

        const emailValido = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?/i; //verifica se é um email valido
        if(this.value.match(emailValido)) {
            document.querySelector('.mensagem').innerHTML = "";
            this.classList.remove('erro'); // se for remove o campo erro
            this.parentNode.classList.remove('erro');
        } else {
            document.querySelector('.mensagem').innerHTML = "verifique o preenchimento dos campos em destaque";
            this.classList.add('erro'); // se não for adiciona campo erro
            this.parentNode.classList.add('erro');
            return false;
        }

    });

}

//campos obrigatorios 
let camposObrigatorios = document.querySelectorAll('input.obrigatorio');
let camposNumericos = document.querySelectorAll('input.numero');
let camposEmail = document.querySelectorAll('input.email');

//chamada da validação para o campo em foco

for( let emFoco of camposObrigatorios) {
    validaCampo(emFoco);
}

for( let emFoco of camposNumericos) {
    validaCampoNumerico(emFoco);
}

for( let emFoco of camposEmail) {
    validaEmail(emFoco);
}