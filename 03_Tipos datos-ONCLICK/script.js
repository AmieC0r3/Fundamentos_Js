// Declaración de variables
var chiste = 'el palo'; //menos segura
let numero = 2.66666666667; //INT = numeros
let cadenaTexto = "Un cubo azul pintado de rojo"; //cdena texto
let valorBooleano = true; //boolean
let arregloNumeros = [1, 7, 9, 0]; //array
let objetoPersona = { nombre: "Sayén", edad: 1 }; //object
let valorIndefinido; //undefinided
let valorNulo = null; //null
const mes = "Июнь"; //
let animal = "you"; //
let user =  { usuario: "humanfleshpievostok1", id: 534547 }; //
let question = "una papa"; //
;
// Funciones para mostrar cada valor con alert()
function mostrarChiste() {
    alert("Respuesta: " + chiste);
}

function mostrarNumero() {
    alert("Respuesta: " + numero);
}

function mostrarTexto() {
    alert("Respuesta:" + cadenaTexto);
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

function mostrarUser() {
    alert("usuario: " + JSON.stringify(user));
}

function mostarPregunta() {
    alert("eres: " + question);
}