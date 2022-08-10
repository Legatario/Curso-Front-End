class Mov{
    constructor(banco = 'padrao', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}


class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.mov = []
    }

    novaMov(... mov){
        mov.forEach(
            lancamento => this.mov.push(lancamento)
        )

    }

    resumo(){
        let velorAtt = 0
        let tipo = ''
        this.mov.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(/x$/i, 'Y')
            if(lancamento.banco.match(/y/i)){
                velorAtt += lancamento.saldo
                tipo += lancamento.nome + ' | '     
            }
        })

        return tipo + velorAtt
    }
}


const m01 = new Mov('Banc Y', 'salario', 2000)
const m02 = new Mov('Banc X', 'comissão', 3000)
const m03 = new Mov('Banc X', 'imposto', -200)
const m04 = new Mov('Banc x', 'salario', 4000)
const m05 = new Mov('Banc x', 'imposto', -500)

const registro01 = new Registro(22,10,2021)
registro01.novaMov(m01, m02, m03, m04, m05)
console.log('o saldo foi de ' + registro01.resumo());

const movGerais = [m01, m02, m03, m04, m05];

movGerais.map(elemento => {
    console.log(elemento.banco.length)
})