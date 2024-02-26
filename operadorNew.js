function Pessoa(nome , idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`meu nome é ${this.nome} e tenho ${this.idade}`)
}

const davi = {
    altura: 1.75
}

Pessoa.call (davi , "Davi" , 18)

console.log(davi)
