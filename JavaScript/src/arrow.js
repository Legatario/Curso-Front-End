function Pessoa(){

        // const pessoa = this
        this.age = 0

    
    setInterval(() => {
        console.log(this.age++)
    }, 2000);
}

const p1 = new Pessoa()


//Arow functions
// parametros (p1, p2, ..., px) => { execução }
// parametro e execução p1 => {}