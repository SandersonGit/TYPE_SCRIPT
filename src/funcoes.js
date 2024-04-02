"use strict";
// Este código TypeScript apresenta exemplos de funções e retorno condicional:
// calculaArea: Uma função que calcula a área de um retângulo com base e altura fornecidas.
// calculaArea2: Uma expressão de função que também calcula a área de um retângulo.
// somar: Uma função que recebe um número variável de argumentos e os imprime no console.
// teste: Uma função que retorna uma string se a condição for verdadeira e um número se for falsa.
function calculaArea(base, altura) {
    return base * altura;
}
const calculaArea2 = (base, altura) => base * altura;
function somar(...numeros) {
    // numeros.reduce()
    console.log(numeros);
}
function teste() {
    if (10 > 5) {
        return "10 é maior que 5";
    }
    else {
        return 5;
    }
}
