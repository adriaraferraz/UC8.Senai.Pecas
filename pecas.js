const listaDePecas = ["Ar Condicionado", "Motor", "Amortecedor"]

console.log("listaDePecas")

if(listaDePecas.length < 10) {
    console.log("É possível cadastrar mais peças")
} else {
    console.log("Não há mais espaço na lista")
}

var peso = 50

if (peso > 100) {
    console.log("Peso da peça está adequado")
} else {
    console.log("Peso insuficiente")
}

let nomePeca = "Disco de Freio";

if (nomePeca.length > 3) {
    console.log("Nome Adequado!!")
} else if (nomePeca.length == 0) {
    console.log("O nome não pode ser vazio")
}

// = -> Atribuição de valor
// == -> Verifica se o valor é igual
// === -> Verifica se o valor, e o tipo de dado, são iguais

if (0 == "0") {
    
}