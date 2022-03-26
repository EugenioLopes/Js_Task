//Estrutura sequencial

//1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
let nome = prompt("Digite seu nome")
console.log(nome)
alert ("É um prazer te conhecer " + nome)

//2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.
let n1 = parseInt(prompt("Digite um número"))
let n2 = parseInt(prompt("Digite outro"))
let s = n1 + n2
alert("A soma dos números é " + s)
//3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.
let nota1 = parseFloat(prompt("Digite sua primeira nota"))
let nota2 = parseFloat(prompt("Digite sua segunda nota"))
let media = (nota1 + nota2) /2
alert("A sua média é " + media)

//4.	Crie um programa leia o ano em que o usuário nasceu e diga a idade atual dele. 
let anoNas = parseInt(prompt("Digite seu ano de nascimeto"))
let anoAtual = parseInt(2022)
let idad = anoAtual - anoNas
alert("Sua idade é " + idad)
//5.	Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.
let salHora = parseInt(prompt("Digite o quantos reais você ganha por hora"))
let trabHora = parseInt(prompt("Digite quantas horas você trabalha pro mês"))
let salario = salHora * trabHora
alert("Seu salário final é de R$ " + salario)

//6.	Faça um script que peça a temperatura em graus Fahrenheit, transforme e mostre a temperatura em graus Celsius.    C = 5 * ((F-32) / 9).

let fahr = parseFloat(prompt("Qual a temperatura em Fahrenheit, para transformar em Celsius"))
let cel = 5 * ((fahr-32) / 9)
alert("A temperatura em Celsius é " + cel +"°C")

//Estrutura de descisao

//1.	Crie um script que leia o nome da pessoa e mostre o nome dela em um alert() e no console 
let n1 = parseInt(prompt("Digite um número"))
let n2 = parseInt(prompt("Digite outro número"))
if (n1>n2) {
    alert("O maior número é o " + n1)
} else {
    alert("O maior número é o "+ n2)  
}
//2.	Crie um script que leia do usuário dois números e mostre a soma desses dois números.

let num = parseInt(prompt("Escreva um valor para saber se é positivo ou negativo "))
if (num>=0) {
    alert("O número é positivo")
} else {
    alert("O número é negativo")
}

//3.	Crie um script que leia duas notas do usuário e calcule a média do aluno.
let sexo = prompt("Qual o seu sexo (F para feminino e M para masculino)")
if (sexo == "F" || sexo =="f" ) {
console.log("Seu sexo é feminino")    
alert("Seu sexo é feminino")
} else if(sexo == "M" || sexo== "m"){
    console.log("Seu sexo é masculino")
    alert("Seu sexo é masculino")      
} else{
    console.log("Sexo invalido")
    alert("Sexo invalido")
}
//4.	Faça um programa para a leitura de duas notas parciais de um aluno. O programa deve calcular a média alcançada por aluno e apresentar:

let nota1 = parseInt(prompt("Primeira nota"))
let nota2 = parseInt(prompt("Segunda nota"))
notaf = (nota1 + nota2) / 2
if (notaf >= 7 ) {
    alert("Aprovado")
}else if (notaf == 10){
    alert("Aprovado por distinção")  
} else{
    alert("Reprovado")
}
//5.	Faça um Programa que leia três números e mostre o maior e o menor deles.
let num1 = parseInt(prompt("Digite um número"))
let num2 = parseInt(prompt("Digite outro número"))
let num3 = parseInt(prompt("Digite mais um"))
if (num1>num2>num3  ) {

}
//6.	Faça um Programa que leia dois números e mostre se ele é par ou ímpar.
let n1 = parseInt(prompt("Digite um número para saber se ele é par ou impar"))
if (n1 %2 ==0){
    alert("O número é par")
} else {
    alert("O número é impar")
}


//-Estruturas de Repetição:

//1 Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja inválido e continue pedindo até que o usuário informe um valor válido.


while(true){
    let num = parseInt(prompt("Digite um número de 0 a 10"))

    if(num >= 0 && num <=10){
        alert("O número " + num +" é um número valido");
        break;
    } else {
        alert("O número "+ num +" é um número invalido, digite um valido")
    }

}

// 2 Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, mostrando uma mensagem de erro e voltando a pedir as informações.

while(true) {
    let nome = prompt("Digite seu nome")
    let senha = prompt("Digite sua senha")

    if(nome != senha){
        alert("Nome e senha validos")
        break
    } else {
        alert("O nome e senha não podem seer iguais, digite um login valido")
    }

}
//4.	Faça um programa que imprima na tela os números de 1 a 20, um abaixo do outro. 

var c = 1
while (c <= 20) {
  console.log(c)
  c++
}
//5.	Faça um programa que leia 5 números e informe o maior número.
let n1 = parseInt(prompt("Digite um número "))
let n2 = parseInt(prompt("Digite mais um número "))
let n3 = parseInt(prompt("Digite mais um número "))
let n4 = parseInt(prompt("Digite mais um número "))
let n5 = parseInt(prompt("Digite e um ultimo número "))
    
const nummax = Math.max(n1,n2,n3,n4,n5)

console.log(nummax)
for (let num = 0; num<n5; num++ ){
    if (num > n${num}){
        console.log(n${num})
    }
}




//6.	Faça um programa que leia 5 números e informe a soma e a média dos números.

let n1 = parseInt(prompt("Digite um número "))
let n2 = parseInt(prompt("Digite mais um número "))
let n3 = parseInt(prompt("Digite mais um número "))
let n4 = parseInt(prompt("Digite mais um número "))
let n5 = parseInt(prompt("Digite e um ultimo número "))

soma = n1 + n2 + n3 + n4 + n5
media =(n1 + n2 + n3 + n4 + n5) /5

alert(`A soma dos valores é ${soma}`)
alert(`A media dos valores é ${media}`)

//7.	Faça um programa que imprima na tela apenas os números ímpares entre 1 e 50.

let num1 = 1
let num2 = 50

for(let i = num1 ; i<num2 ; i++) {
    if(i%2 ==1 ){
    console.log(i)    
    }
}

/*8.	Desenvolva um gerador de tabuada, capaz de gerar a tabuada de qualquer número inteiro entre 1 a 10. O usuário deve informar de qual numero ele deseja ver a tabuada. A saída deve ser conforme o exemplo abaixo:
a.	Tabuada de 5: */

let num = parseInt(prompt("Digite um número para saber sua tabuada"))

for (let tab = 1; tab <=10 ; tab++){
    console.log(`${num} x ${tab} = ${num*tab}`)
}

//FizzBuzz
/*
Dado um número n, para cada número entre 1 e 100, imprime um valor por linha da seguinte maneira:
Se i for múltiplo de 3 e 5, imprima o FizzBuzz.
Se i for múltiplo de 3 (mas não de 5), imprima o Fizz.
Se i for múltiplo de 5 (mas não de 3), imprima o Buzz.
Se i não for múltiplo de 3 ou 5, imprima o valor de i.
*/

let i = parseInt(prompt("Digite um número"))
if (i <=100 && i>=1){
    if (i%3===0 && i%5 ===0){
        console.log("FizzBuzz")
    } else if (i%3 ===0 && i%5 !=0 ){
        console.log("Fizz")
    } else if (i%3 !=0 && i%5 ===0){
        console.log("Buzz")}
    else(console.log(i))
} else {
    console.log(i)
}

//Exercícios Funções

//1.	Crie uma função que receba um inteiro e diga se ele é “Par” para números pares ou “Ímpar” para números impares.

function num (n){
    if (n%2==0){
       return "Par"

    }else{
       return "Impar"
    }
    
}

//2.	Crie uma função que receba dois números e retorne o resultado da soma entre eles.

function num (n,n2){
    return n+n2
    console.log(num)
}
//3.	Crie uma função que receba um número e retorne o oposto desse número. Exemplos de retornos:
//negativo(1) // return -1
//negativo(-5) // return 5

function num(n){
    return n*-1
}

//4.	Crie uma função que receba um array de números, e retorne a suma de todos os números positivos desse array. Exemplos de retornos:
//somaDePositivos([1,-4,7,12]) // 1 + 7 + 12 = 20 -> return 20

function num(n){
    let n1 = 0
    n.forEach (function(item) { 
        if (item>0){
            n1 += item
        }
    }) 
    return n1
}
