//Codigo cuadrado
function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrado(lado) {
    return lado * lado;
}

//Codigo triangulo
function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//Codigo circulo
const PI = Math.PI;
function perimetroCirculo(radio){
    return radio * 2 * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI;  
} 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("impCuadrado");
    const value = input.value;
    alert(perimetroCuadrado(value));
}

function calcularAreaCuadrado(){
    const input = document.getElementById("impCuadrado");
    const value = input.value;
    alert(areaCuadrado(value));
}