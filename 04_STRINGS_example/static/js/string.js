//ejemplo

// function alert
function usarStrings() {
    let nombre = prompt("ingrese su nombre: ");
    let primeraLetra = nombre[0]; //asigna valor a primeraLetra con la posición 0
    let ultimaLetra = nombre[nombre.length - 1]; //uso length --> largo de let , con -1 muestra la última letra
    alert("Primera letra es: " + primeraLetra +
        "\nÚltima letra es: " + ultimaLetra); //muestra resultado
    alert
}

//tarea: imprimir segunda letra y penultima del apellido

function apellido() {
    let lastName = prompt("ingrese su apellido: ")
    let segundaLetra = lastName[1]; //asigna valor a primeraLetra con la posición 0
    let penultimaLetra = lastName[lastName.length - 2]; //uso length --> largo de let , con -1 muestra la última letra
    alert("Segunda letra del apellido es: " + segundaLetra +
        "\nPenltima letra del apellido es: " + penultimaLetra); //muestra resultado
    alert
}

//no se puede porque es INMUTABLE
apellido[0] = "JSON"; //no funciona
alert("Segunda letra del apellido es: " + segundaLetra +
    "\nPenltima letra del apellido es: " + penultimaLetra);