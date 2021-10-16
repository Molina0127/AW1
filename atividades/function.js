//Hosting
/*nameFunc()

function nameFunc() {
  console.log('Hello World!')
}
*/

//Valor default é 1
/*function quadrado(num = 1) {
  return num * num
}

console.log(quadrado('3')) */

//Função anônima
/*var q = function quadrado(num = 1) {
  return num * num
}

console.log(q('2'))
*/

//arrow function
/*var s = (num1 = 1, num2 = 2) => {
  let soma = num1 + num2
  return soma
}

console.log(s(2, 5))*/

//funções nativas
/*var numbers = [1, 4, 9]

const result = numbers.map(function (n) {
  return Math.sqrt(n)
})

const result2 = numbers.map(Math.sqrt)

console.log(result, result2)*/

/*
var numbers = [1, 4, 9]

const result = numbers.map(function (n) {
  var r = {
    raiz: Math.sqrt(n),
    expo: Math.pow(n, 2)
  }
  return r
})

console.log(result)
*/

// acumular funções
var str = 'natan'

str2 = str.split('').reverse().join('')

palin = str == str2 ? true : false

console.log(palin)
