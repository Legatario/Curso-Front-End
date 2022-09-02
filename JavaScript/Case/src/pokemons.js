import pokemons from './listPokemon.js'


//chamar os 3 iniciais 
const inicial = pokemons.filter((pokemons)=>{
    return pokemons.id === 1 || pokemons.id === 4 || pokemons.id === 7
})


//recebendo nomes
let myChoiceIs =  ''
inicial.forEach(pokemons=>{
    myChoiceIs += pokemons.name + ' '
})

//recebendo url
let myPokemonIS = ''

inicial.forEach(url=>{
    myPokemonIS += '<'+'img'+' '+ 'src="' + url.url +'">' 
})

// retornar peso de todos os pokemons

let weightPokemon = pokemons.reduce( (a,b)=>{
    return {peso: a.peso + b.peso}
})
// retorna a proxima evolução

let evolution = inicial.map((id)=>{
    return id.id+1
})

const next = pokemons.filter((pokemons)=>{

        return pokemons.id === evolution[0] || pokemons.id === evolution[1] || pokemons.id === evolution[2]         
               
})
// nomeando as evoluções
let myNextIs =  ''

next.forEach(pokemons=>{
    myNextIs += pokemons.name + ' '
})


console.log(myChoiceIs)
console.log(weightPokemon)
console.log(evolution)
console.log(next)
document.getElementById('main').innerHTML = 'Qual seu pokemom inicial? ' + '<br>' + myChoiceIs + '<br>' + myPokemonIS + '<br>' + 'E você sabia que o peso de todos os pokemons e suas evoluções é de ' + weightPokemon.peso + ' Kg' + '<br>' + 'Sendo suas evoluções os ' + myNextIs

