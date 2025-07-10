/*  Pide al usuario que escriba una frase cualquiera. Luego, verifica si esa frase contiene 
la palabra "javascript" (en minúsculas, exactamente así escrita).*/

function fraseJS() {
    let frase = prompt("ingresa una frase:");

    if (frase === "javascript") {
        alert("estas hablando de javascript!!")
    }
}

/* Solicita dos palabras con prompt(). Compara cuántas letras tiene cada una 
y muestra cuál es más larga o si tienen el mismo largo. */

function pala() {
    let pal = prompt("ingresa una palabra:");
    let fa = prompt("ingresa otra palabra:");

    if (pal.length > fa.length) {
        alert("la primera palabra es mas larga");
    } else if (pal.length < fa.length) {
        alert("la segunda palabra es mas larga");
    } else {
        alert("ingrese un valor valido");
    };
}

/* Verifica si el texto contiene el símbolo @. Si lo tiene,
muestra "Correo válido", si no, "Correo inválido". */

function correo() {
    let email = prompt("por favor ingrese un email")

    if (email.includes("@")) {
        alert("correo valido");
    } else {
        alert("ingrese un valor valido");
    };
}

/* Solicita un número. Muestra si es positivo, negativo o cero. */

function nume() {
    let num = parseInt(prompt("ingrese un numero"));
    
    if (num < 0 ){
        alert("ese es un numero negativo");
    } else if (num > 0){
        alert("ese es un numero positivo");
    } else if (num === 0) {
        alert("ese es el cero");
    }else {
        alert("ingrese un valor valido");
    };
}

/*Si es antes de las 12, muestra "Buenos días", si es entre 12 y 18,
"Buenas tardes", y si es mayor a 18, "Buenas noches".*/

function hi(){
    let sal = parseInt(prompt("que hora es?"));

    if (sal < 12) {
        alert("good morning");
    } else if( sal >= 12 && sal < 18) {
        alert("good afternoon");
    } else if (sal >= 18) {
        alert("good night!!")
    } else {
        alert("please enter a valid value")
    };
}

/* Verifica si contiene la letra "e" (minúscula). Si la tiene, muestra
"Contiene la letra 'e'", si no, muestra "No contiene la letra 'e'". */

function eee() {
    let pali = prompt("por favor ingrese un email")

    if (pali.includes("e")) {
        alert("contiene la letra e");
    } else {
        alert("no contiene e");
    };
}