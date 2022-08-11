let months = [
    {   
        month: 'Janeiro',
        color: 'amarelo',
        days: 31
    },
    { 
        month: 'Fevereiro',
        color: 'roxo',
        days: 28
    },
    { 
        month: 'Março',
        color: 'verde',
        days: 31
    },
    { 
        month: 'Abril',
        color: 'beje',
        days: 30
    },
    { 
        month: 'Maio',
        color: 'vermelho',
        days: 31
    },
    { 
        month: 'Junho',
        color: 'marron',
        days: 30
    },
    { 
        month: 'Julho',
        color: 'laranja',
        days: 31
    },
    { 
        month: 'Agosto',
        color: 'cinza',
        days: 31
    },
    { 
        month: 'Setembro',
        color: '',
        days: 30
    },
    { 
        month: 'Outubro',
        color: 'azul',
        days: 31
    },
    { 
        month: 'Novembro',
        color: 'rosa',
        days: 30
    },
    {
        month: 'Dezembro',
        color: 'branco',
        days: 31
    }
]

function getMonths(){
    return months
}

let toMonths = getMonths()

// export default getMonths()

let filteredMonths = toMonths.filter( (toMonths) =>{
    return toMonths.days === 31
})

console.log(filteredMonths);

let toPrint = ''

filteredMonths.forEach(month => {
    toPrint += month.month + ', '
});

console.log(toPrint)


let sumMonthDays = filteredMonths.reduce( (prev, next)=>{
    return {days: prev.days + next.days}
})

let cachorros = [10, 15, 7, 8, 9]

let years = cachorros.map( (cachorro)=>{
    return cachorro * 7 
})



document.getElementById('main').innerHTML = toPrint + '</br> Soma dos dias selecionas: ' + sumMonthDays.days + '</br> idade humana dos cachorros: ' + years + ' '
