// Declaración de variables
var chiste = 'el palo'; //menos segura
let numero = 3.14; //INT = numeros
let cadenaTexto = "Un cubo azul pintado de rojo"; //
let valorBooleano = true; //
let arregloNumeros = [1, 7, 9, 0]; //
let objetoPersona = { nombre: "Sayén", edad: 1 }; //
let valorIndefinido; //
let valorNulo = null; //
const mes = "Июнь"; //
let animal = "you"; //
const user =  { usuario: "humanfleshpievostok1", id: 534547 }; //
let question = "una papa"; //
;
// Funciones para mostrar cada valor con alert()
function mostrarChiste() {
    alert("cual es el boomerang que no vuelve?: " + chiste);
}

function mostrarNumero() {
    alert("Número: " + numero);
}

function mostrarTexto() {
    alert("¿Qué es rojo y tiene forma de cubo?:" + cadenaTexto);
}

function mostrarBooleano() {
    alert("Valor booleano: " + valorBooleano);
}

function mostrarArreglo() {
    alert("Arreglo de números: " + arregloNumeros);
}

function mostrarObjeto() {
    alert("Objeto persona: " + JSON.stringify(objetoPersona));
}

function mostrarIndefinido() {
    alert("Valor indefinido: " + valorIndefinido);
}

function mostrarNulo() {
    alert("Valor nulo: " + valorNulo);
}

function mostrarConstante() {
    alert("Constante mes: " + mes);
}

function mostrarAnimal() {
    alert("animal: " + animal);
}

function mmostrarUser() {
    alert("Cusuario: " + user);
}

function mostarPregunta() {
    alert("eres: " + question);
}