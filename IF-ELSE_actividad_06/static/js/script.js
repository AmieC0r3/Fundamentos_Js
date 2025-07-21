/* Solicita dos palabras con prompt(). Compara cuántas letras tiene cada una 
y muestra cuál es más larga o si tienen el mismo largo. */

function pala() {
    let pal1 = prompt("ingresa una palabra:");
    let pal2 = prompt("ingresa otra palabra:");

    if (pal1.length > pal2.length) {
        alert(`la palabra mas larga es ${pal1} con ${pal1.length}`);
    } else if (pal1.length < pal2.length) {
        alert(`la palabra mas larga es ${pal2} con ${pal2.length}`);
    } else if (pal1.length == pal2.length) {
        alert(`tanto ${pal1} y ${pal2} tienen el mismo largo con:\n
            ${pal1.length} caracteres`);
    } else if ( pal1.length == "" || pal2.length == "" ){
        alert("Por favor ingrese algun valor...");
    } else{
        alert("por favor ingrese algun valor ")
    };
}

/* Verifica si el texto contiene el símbolo @. Si lo tiene,
muestra "Correo válido", si no, "Correo inválido". */

function correo() {
    let email = prompt("por favor ingrese un email")

    if (email.includes("@gmail.com")) {
        alert(`ִ ࣪ ˖ ࣪ ᨰꫀᥣᥴ᥆ꩇꫀ ! ᰔ ִ ׄ : ${email}\n
            disfuta de la pagina`);
    } else {
        alert("➺ Por favor ingrese un correo valido: somoneExample@gmail.com");
    };
}

/* Solicita un número. Muestra si es positivo, negativo o cero. */

function nume() {
    let num = parseInt(prompt("ingrese un numero"));

    if (num < 0) {
        alert("ese es un numero negativo");
    } else if (num > 0) {
        alert("ese es un numero positivo");
    } else if (num === 0) {
        alert("ese es el cero");
    } else {
        alert("ingrese un valor valido");
    };
}

/*Si es antes de las 12, muestra "Buenos días", si es entre 12 y 18,
"Buenas tardes", y si es mayor a 18, "Buenas noches".*/

function hi() {
    let sal = parseInt(prompt("Tu sabes que hora es?  ❤︎"));

    if (sal < 12) {
        alert("good morning ꒰ᐢ.   ̫ .ᐢ꒱");
    } else if (sal >= 12 && sal < 18) {
        alert("good afternoon ᕙ( •̀ ᗜ •́ )ᕗ");
    } else if (sal >= 18) {
        alert("good night!!  Ი︵𐑼")
    } else {
        alert("please enter a valid value")
    };
}

/* Verifica si contiene la letra "e" (minúscula). Si la tiene, muestra
"Contiene la letra 'e'", si no, muestra "No contiene la letra 'e'". */

function eee() {
    let pali = prompt("por favor ingrese una palabra")

    if (pali.includes("e")) {
        alert("contiene la letra e");
    } else {
        alert("no contiene e");
    };
}

// la imagen xdddd

const imag = document.querySelector("#mouse")
mouse.addEventListener("mouseover", function() {
    mouse.src = "static/images/clary.jpg";
});

mouse.addEventListener("mouseout", function() {
    mouse.src = "static/images/Thebitty.jpg";
});