let n1 = Number(prompt("Me diga um número"))
let n2 = Number(prompt('Me informa outro número'))

console.log(n1) 
console.log(n2)

let primeiroMaiorSegundo = n1 > n2
console.log("O primeiro numero é maior que segundo?",primeiroMaiorSegundo)

let primeiroIgualSegundo = n1 === n2
console.log("O primeiro numero é igual ao segundo?", primeiroIgualSegundo)

let primeiroDivisivelSegundo = n1 % n2 == 0
console.log("O primeiro numero é divisível pelo segundo?", primeiroDivisivelSegundo)

let segundoDivisivelPrimeiro = n2 % n1 ==0
console.log("O segundo numero é divisível pelo primeiro?", segundoDivisivelPrimeiro)
