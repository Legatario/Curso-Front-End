import months from './years.js'

// Filtra meses
const filteredMonths = months.filter( (months)=> {
    return months.days === 31
})

console.log(filteredMonths)

let toPrint = ''
let toDays = ''

// Lista meses
filteredMonths.forEach(month => {
   toPrint += month.month + ', '
});

months.forEach(month =>{
    toDays += month.days + ', '
});

// for( let c = 0; c < filteredMonths.length; c++ ){

// }

let meses = [30,30,30] // array comum

// Reduce - função com todos os itens do array e devolve um valor único
let sumMonthDays = filteredMonths.reduce( (prev, next) => {
    return {days: prev.days + next.days}
})

// Map - funções em arrays de retorno individual (cada valor array)
let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map( (cachorro => {
    return cachorro * 7
}))

document.getElementById('main').innerHTML = 
    'Os meses com 31 dias são: ' + toPrint 
    + '<br>' + 'A sequencia dos mesês são: ' + toDays
    + '<br> Soma dos dias dos meses selecionados: ' 
    + sumMonthDays.days + '<br> A idade humana dos cachorros: '  
    + years + ' '
