const url = 'https://api.github.com/users';
const main = document.getElementById('main');
let text = ''

function getUser(user){
    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }  
    })
    .then((response)=>response.json())
    .then((data)=>{
        text += `${data.name} possui ${data.public_repos} projetos público no GitHub como ${data.login} <br>`
        main.innerHTML = text
    })
    
    .catch((error)=> console.error('Erro:', error.message || error))
}

const userInput = document.getElementById('userName')
userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})

