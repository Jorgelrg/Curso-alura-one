// variable del numero secreto
let numeroMaximo = 10;

//Arreglo
let listaNumerosSorteados = [];
let numeroSecreto = 0;
let intentos = 1;



//Funcion para agregar texto a cualquier etiqueta se HTML
function asignarTextoElemento(elemento, texto){
    /// Conecar Javascript al htmo con Document. seleccionamos la qtiqueeta que queremos usar
    let elementoHTML = document.querySelector(elemento);
    // Agregamos el texto
    elementoHTML.innerHTML = texto;
    return;
}

//Funccion a realizar cuando se daclick en un parte del html
function intentoUsuario(){
    alert("Diste click en el boton");
    return;
}

//funcion para generar el numero secreto
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si todos los numero ya han sido sorteados
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento("p", "Todos los números posibles han sido sorteados")
    }
    else{
        //si el numero generado esta en la ista
         if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
         }
         else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
        }
    }

}

//funcion para verifiar el numero deusuario y el el rograma
function verificarIntento() {
    // esta linea sirve para capturar los datoss del input
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    if(numeroUsuario === numeroSecreto){
        asignarTextoElemento("p", `Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`)
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(numeroUsuario > numeroSecreto){
          asignarTextoElemento("p", "El número secreto es menor") ; 
        }
        else{
            asignarTextoElemento("p", "El número secreto es mayor")
        }
        intentos++;
        vaciarCaja();
    }
    return;
}

//funcion para limpiar la caja d texto
function vaciarCaja() {
    document.getElementById('valorUsuario').value = '';
}

function condicionesIniciales() {
    //llamado de funciones
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
//funcion para inicar un nuevo juego
function juegoNuevo() {
    vaciarCaja();
    condicionesIniciales();
    
}

condicionesIniciales();