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

    if (num % 2 == 0) {
        alert("par");
    } else if (num % 2 !== 0) {
        alert("impar");
    } else {
        alert("Please enter a valid value");
    }
};

/* Temperatura ambiental: Solicita la temperatura actual. Si es mayor o igual a 30,
muestra “Hace calor”, de lo contrario muestra “Clima agradable”.*/

function temp() {
    let tempActual = parseInt(prompt("enter temperature: "));

    if (tempActual >= 15 && tempActual < 30) {
        alert("Pleasant weather");
    } else if (tempActual >= 30 && tempActual < 50) {
        alert("It's hot");
    } else if (tempActual >= -5 && tempActual < 15) {
        alert("It's cold");
    } else {
        alert("Please enter a valid value");
    }
};

/*Comparar dos números: Solicita dos números al usuario.
Compara ambos y muestra cuál es mayor o si son iguales.*/

function compNum() {
    let num1 = parseInt(prompt("enter number one: "));
    let num2 = parseInt(prompt("enter number two: "));

    if (num1 < num2) {
        alert("The number " + num1 + " is less than the number " + num2);
    } else if (num2 < num1) {
        alert("The number " + num2 + " is less than the number " + num1);
    } else if (num2 == num1) {
        alert("The number " + num1 + " and the number " + num2 + " are the same.");
    } else {
        alert("Please enter a valid value");
    }
};

/*Calificación escolar: Pide una nota entre 1 y 7. Si es 4 o más,
muestra “Aprobado”, si es menor, muestra “Reprobado”. */

function note() {
    let nIng = parseInt(prompt("enter grade: "));

    if (nIng <= 4) {
        alert("disapproved");
    } else if (nIng >= 4 && nIng <= 7) {
        alert("approved");
    } else {
        alert("Please enter a valid value");
    }
};

/* Nombre de usuario válido: Pide un nombre de usuario. Si el valor ingresado es "admin",
muestra “Bienvenido,administrador”. Si no, muestra “Usuario no reconocido”. */

function user() {
    let name = "admin"; //contraseña con comillas porque no hay operacion
    let pass = prompt("enter password: ");

    if (pass == name) {
        alert("allowed access :)");
    } else {
        alert("sorry access denied >:(");
    }
};

/* Verificar si una palabra empieza con "A": Pide una palabra al usuario. Verifica
si empieza con la letra “A” mayúscula y muestra un mensaje acorde. */

function word() {
    let pal = prompt("enter any word");
    let a = pal[0];

    if (a == "A" || a == "a") {
        alert("congratulations starts with a");
    } else if (a !== "A" || a !== "a") {
        alert("sorry doesn't start with a");
    } else {
        alert("Please enter a valid value");
    }
};

/* Precio con descuento: Solicita el precio de un producto. Si el precio es mayor a 10000,
muestra que aplica descuento. Si no, indica precio normal. */

function cost() {
    let desc = parsefloat(parseInt(prompt("enter price of the discount (example: 20%)")));
    desc /= 100;
    let price = 10000;
    let prod = parsefloat(parseInt(prompt("enter price for a discount!!")));

    if (prod <= price) {
        alert('El valor ingresado fue: ${prod}\n IVA');
    } else if (prod >= price) {
        alert("Congratulations, you have a discount!! (つ⁎ᵕᴗᵕ⁎)つ");
    } else {
        alert("Please enter a valid value");
    }
};

/* Verificar si una persona puede conducir: Solicita la edad del usuario y
si tiene licencia (por ejemplo, respondiendo "sí" o "no"). Si tiene 18 o más y
respondió que tiene licencia, muestra “Puede conducir”. Si no, muestra “No puede conducir”. */

/*function manejar() {
    let age = parseInt(prompt("enter your age: "));
    let lic = prompt("you have a license?? (yes or no): ");

    if (age >= 18 && lic == "yes") {
        alert("Congratulations!! you can drive!!");
    } else if (age >= 18 && lic == "no") {
        alert("If you drive you may have problems, better not do it.");
    } else if (age <= 18 && lic == "yes") {
        alert("If you drive you may have problems, better not do it, and... how do you have a license?");
    } else if (age <= 18 && lic == "no") {
        alert("Did you really think about it?");
    } else if (lic !== "yes" && lic !== "no") {
        alert("Please enter a valid value");
    } else if( age > 100) {
        alert ("are you sure??");
    }else {
        alert("Please enter a valid value");
    }
};  */

function manejar() {
    let age = parseInt(prompt("enter your age: "));

    if (age > 18 && age < 100) {
        let lic = prompt("you have a license?? (yes or no): ");

        if (lic == "yes") {
            alert("Congratulations!! you can drive!!");
        } else if (lic == "no") {
            alert("If you drive you may have problems, better not do it.");
        } else if (lic !== "yes" && lic !== "no") {
            alert("Please enter a valid value");
        } else {
            alert("Please enter a valid value");
        }
    } else {
        alert("Please enter a valid value");
    }
}

function cerca() {
    alert("sorry you were electrocuted")
}