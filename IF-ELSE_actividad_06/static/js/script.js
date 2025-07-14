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
    let pal1 = prompt("ingresa una palabra:");
    let pal2 = prompt("ingresa otra palabra:");

    if (pal1.length > pal2.length) {
        alert(`la palabra mas larga es ${pal1} con ${pal1.length}`);
    } else if (pal1.length < pal2.length) {
        alert(`la palabra mas larga es ${pal2} con ${pal2.length}`);
    } else if (pal1.length == pal2.length){
        alert(`tanto ${pal1} y ${pal2} tienen el mismo largo con:\n
            ${pal1.length} caracteres`);
    } else{
        alert ("por favor ingrese un valor valido");
    };
}

/* Verifica si el texto contiene el símbolo @. Si lo tiene,
muestra "Correo válido", si no, "Correo inválido". */

function correo() {
    let email = prompt("por favor ingrese un email")

    if (email.includes("@gmail.com")) {
        alert("correo valido");
    } else {
        alert("por favor ingrese un correo valido");
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