const pessoa = {
    idade: 18
}

const davi = Object.create(pessoa)

davi.nome = "Davi"

console.log(davi.idade)