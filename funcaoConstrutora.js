 function Pessoa (nome , idade){
    this.nome = nome
    this.idade = idade
 }

 Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
 }
 /* é a mesma coisa que o código:

 class Pessoa {
        constructor (nome , idade){
        this.nome = nome
        this.idade = idade
        }
        falar(){
              console.log(`Meu nome é ${this.nome} e tenho ${this.idade}`)
        }
 }*/

 const davi = new Pessoa("davi" , 18)

 davi.falar()