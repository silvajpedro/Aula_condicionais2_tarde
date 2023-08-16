// CONDICIONAIS

// CONDICIONAIS SIMPLES

let idade = 15

if(idade >= 15){
    console.log("você está na adolescência")
}

idade = 20

if(idade <= 16){
    console.log("você se consulta no pediatra")
}


// operadores de comparação
// > maior que
// < menor que 
// >= maior ou igual 
// <= menor ou igual 
// == operador de igualdade
// === estritamente igual 
// != diferente de 
// !== estritamente desigual

let numeroDaSorte = "3"

if(numeroDaSorte == 3){
    console.log("isso é um numero")
}


// condições compostas

let salario = "$$"

if(salario == "$"){
    console.log("você receberá seu salário em reais")
} else {
    console.log("você receberá em dólares")
}

let pilulaMatrix = "vermelho"

if(pilulaMatrix == "azul"){
    console.log("você será o salvador do mundo")
}else{
    console.log("volte a viver a sua vida normal!!!")
}

let tamanhoDeRoupa = "p"

tamanhoDeRoupa = "m"

if(tamanhoDeRoupa == "p"){
    console.log("esse tamanho está disponível")
} else{
    console.log("esse tamanho não está disponível")
}

// if(tamanhoDeRoupa == "p"){
//     console.log("esse tamanho está disponível")
// }
// if(tamanhoDeRoupa != "p"){
//     console.log("esse tamanho não está disponível")
// }
// if(tamanhoDeRoupa != "g"){
//     console.log("esse tamanho não está disponível")
// }

// operadores lógicos

// && -> (and) vai executar a ação, somente se as duas condições forem verdadeiras

// || -> (or) vai executar a ação, se uma das duas condições forem verdadeiras

// !  -> (not) (negação) ele vai contráriar a ordem lógica da nossa condição, exemplo console.log(!true) -> vai mostrar no console false

let cartaoCredito = 100

let idadeUsuario = 15

if(cartaoCredito == 100 && idadeUsuario >= 18){
    console.log("você está liberado para compra")
} else{
    console.log("você não está liberado para compra")
}

let celular = "xiaomi"

if(celular == "iphone" || celular == "android" || celular == "xiaomi"){
    console.log(`o modelo do meu celular é ${celular}`)
}else{
    console.log("estou triste")
}

let tempo = "dia"

if(!tempo == "dia"){
    console.log("está de dia")
} else{
    console.log("está de noite")
}

// condições aninhadas

let marcaCarro = "fusca"

if(marcaCarro == "BMW"){
    console.log("eu tenho uma BMW")
} else if(marcaCarro == "camaro"){
    console.log("eu tenho um camaro")
} else if(marcaCarro == "Ford"){
    console.log("eu tenho um ford")
} else{
    console.log("eu tenho um fusca")
}

tamanhoDeRoupa = "x"

if(tamanhoDeRoupa == "p"){
    console.log("o tamanho da roupa é p")
} else if(tamanhoDeRoupa == "m"){
    console.log("o tamanho da roupa é m")
} else if(tamanhoDeRoupa == "g"){
    console.log("o tamanho da roupa é g")
} else if(tamanhoDeRoupa == "gg"){
    console.log("o tamanho da roupa é gg")
} else{
    console.log("não tem esse tamanho disponível")
}

// loops -> loops são estruturas de código que permitem a gente executar uma ação repetidas vezes...

let contador = 0

// console.log(contador +1)
// console.log(contador +2)
// console.log(contador +3)

while(contador < 100){
console.log(contador += 1)
}