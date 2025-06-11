console.log("conexion con js establecida...")

/*  Edad para votar: Solicita la edad del usuario mediante prompt().
Muestra con alert() si puede votar (18 años o más) o no.  */

function edadVotar() {
    let edad = parseInt(prompt("enter your age")); //input string / parseInt: convierte string a num.
    //condicion if-if else- else.

    if (edad >= 18) {
        alert("your age " + edad + " is approved for voting.");
    } else if (edad >= 0 && edad < 18) {
        alert("your age " + edad + " isn't approved to vote.");
    } else {
        alert("Please enter a valid value");
    }
};

/* Contraseña válida: Pide una contraseña con prompt().Si es igual a "1234", muestra un
mensaje de acceso permitido. En caso contrario, muestra acceso denegado. */

function valPassword() {
    let pnum = "1234"; //contraseña con comillas porque no hay operacion
    let pass = prompt("enter password: ");

    if (pass == pnum) {
        alert("allowed access :)");
    } else {
        alert("sorry access denied >:(");
    }
};

/* Verificar par o impar: Pide un número por prompt(). Evalúa si el número
 es par o impar y muestra el resultado con alert(). */

function paImp() {
    let num = parseInt(prompt("enter number: "));

    if (num%2==0) {
        alert("par");
    } else if(num%2!==0){
        alert("impar");
    } else {
        alert("Please enter a valid value");
    }
};

/* Temperatura ambiental: Solicita la temperatura actual. Si es mayor o igual a 30,
muestra “Hace calor”, de lo contrario muestra “Clima agradable”.*/

function temp() {
    let temperatura = "30";
    let tempActual = parseInt(prompt("enter temperature: "));

    if (tempActual <= temperatura) {
        alert("Pleasant weather");
    } else if(tempActual >= temperatura){
        alert("It's hot");
    } else {
        alert("Please enter a valid value");
    }
};

/*Comparar dos números: Solicita dos números al usuario.
Compara ambos y muestra cuál es mayor o si son iguales.*/
