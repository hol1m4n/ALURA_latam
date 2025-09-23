// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Autor: Holman Quintero Salazar
 ALURA_latam
 Repositorio del Challenge Amigo secreto. ALURA Latam. Principiante en Programación G9 - ONE.
 */




let amigo_n = ''; // Declaracion de la variable amigo cada vez que se hace click en el boton añadir

var LISTA = []; // Lista de amigos

let sorteo = Boolean(false); // Variable sorteo que indica hasta cuando se siguen recibiendo entradas para los amigos

let c = 0; // Variable contador para el numero de entradas que recibira la caja de nombres

let elementoHTML; // Elemento HTML a modificar (Lista de amigos o el amigo secreto)

let valorCaja; // Variable para vaciar cajas y resetear valores 


function evaluar_nombre(nombre){ // Funcion que evalua si el nombre tiene caracteres especiales o numeros

    // Si el nombre viene con numeros o caracteres especiales se retorna el valor False, de lo contrario el valor es True

    if(nombre.includes('0') || nombre.includes('1') || nombre.includes('2') || nombre.includes('3') 
    || nombre.includes('4') || nombre.includes('5') || nombre.includes('6') || nombre.includes('7')
    || nombre.includes('8') || nombre.includes('9') || nombre.includes('!') || nombre.includes('&')
    || nombre.includes('#') || nombre.includes('$') || nombre.includes('%') || nombre.includes('*')
    || nombre.includes('(') || nombre.includes(')') || nombre.includes('_') || nombre.includes('+')
    || nombre.includes('@') || nombre.includes('^') || nombre.includes('-') || nombre.includes('=')
    || nombre.includes('[') || nombre.includes(']') || nombre.includes("'") || nombre.includes('"')
    || nombre.includes(',') || nombre.includes('.') || nombre.includes(";") || nombre.includes(':')){
        console.log('El nombre solo puede contener letras')
        return 0; // Condicional que excluye si hay valores numericos o  simbolos diferentes a letras regulares
    }
    if(nombre == ''){
        console.log('Se debe agregar un valor no nulo')
        return 1; // Condicional que revisa si se esta agregando un valor nulo
    }
    else{
        return 2; // Si no se cumplen los condicionales anteriores se pasa al siguiente valor
    }
}

function Mayuscula_PrimeraLetra(nombre) { // Si la primera letra del nombre viene en minuscula esta funcion la convierte en mayuscula
    return nombre.charAt(0).toUpperCase() + nombre.slice(1); // Retorna el valor del nombre con la primera letra en minuscula
  }
  



function agregarAmigo(){ // Esta funcion se encarga de agregar los nombres de los amigos uno a uno


    if (sorteo == Boolean(false)){ // Si no se ha ejecutado el sorteo se ejecuta esta accion (es un check de consistencia para evitar errores)

        valorCaja = document.getElementById("resultado"); 
        valorCaja.innerHTML = ''; // Limpiar la caja de texto verde (amigo secreto) en caso de que provenga de una corrida anterior

        amigo_n = document.getElementById('amigo').value; // Agregar el nombre del amigo o amiga


        if (evaluar_nombre(amigo_n) == 0){
            alert('EL nombre solo puede contener letras'); // Evaluar que el nombre solo este compuesto por letras
        }
        if (evaluar_nombre(amigo_n) == 1){
            alert('Se debe agregar un valor no nulo'); // Evaluar que no se este intentando agregar un valor vacio
        }
        if (evaluar_nombre(amigo_n) == 2){ // Si se cumplen los criterios de aceptacion anteriores, el nombre va a la lista.

            LISTA[c] = document.getElementById('amigo').value; // Llenar el valor c (contador) en la lista con el nombre de la caja Añadir
            LISTA[c] = Mayuscula_PrimeraLetra(LISTA[c]); // Convertir su primer letra a mayuscula
            console.log(LISTA);
            c++; // Sumar 1 al contador para seguir agregando nombres

            valorCaja = document.querySelector('#amigo'); 
            valorCaja.value = ''; // Vaciar la caja de Añadir
            valorCaja.placeholder = 'Escribe otro nombre o sortea si son mas de dos personas'; // Mostrar en la pantalla que se pueden agregar mas nombres o sortear
        }

        elementoHTML = document.getElementById("listaAmigos");
        elementoHTML.innerHTML = LISTA.join("<br>"); // Mostrar la lista de amigos ACTUAL, una sobre la obra, teniendo en cuenta la separacion por "<br>" en la lista
        
    }    
}

















function sortearAmigo(){ // Funcion que sortea el/la amig@ secret@ de forma aleatoria segun la lista de nombres que fue ingresada

    sorteo = Boolean(true); // Activar la funcion de sortear (check de consistencia)

    n_entradas = LISTA.length; // Contar el numero de nombres en la lista 

    if (n_entradas <= 2){
        if(n_entradas == 0){ // Si el numero de entradas es cero quiere decir que no se han agregado nombres, por lo que se le pide al usuario agregarlos
            console.log('No se ha agregado ningun nombre. Por favor agrega al menos 3');
            alert('No se ha agregado ningun nombre. Por favor agrega al menos 3');
            sorteo = Boolean(false);
        }
        if(n_entradas > 0 && n_entradas <= 2){ // Si el numero de entradas es menor que tres no tendria sentido jugar al amigo secreto, por lo que se le pide al usuario agregar al menos tres usuarios
            console.log('Por favor agrega al menos 3 nombres');
            alert('Por favor agrega al menos 3 nombres');
            sorteo = Boolean(false);
        }
    }
    else{ // Si se cumplen las condiciones anteriores se procede a realizar la siguiente accion

        let aleatorio = Math.floor(Math.random() * (n_entradas + 1)); // Calcular un numero aleatorio entre 0 y el numero de nombres en la lista
        // Aleatorio * (Numero de entradas  + 1 ) y luego convertido a entero
        console.log(aleatorio);

        amigo_secreto = LISTA[aleatorio] // Se asigna ese numero aleatorio a la lista de nombres y se toma el valor correspondiente


        valorCaja = document.querySelector('#amigo');
        valorCaja.value = '';
        valorCaja.placeholder = 'Añade un nuevo nombre para jugar otra vez (nueva lista)';
        // Se limpia el valor de la caja Añadir y se sugiere al usuario comenzar con una nueva lista


        elementoHTML = document.getElementById("listaAmigos");
        elementoHTML.innerHTML = ''; // Se limpia la lista de nombres del elemento HTML
        elementoHTML = document.getElementById("resultado");
        elementoHTML.innerHTML = "Tu amig@ secret@ es : " + amigo_secreto; // Se muestra en pantalla el amigo o amiga secreta escogid@ al azar



        // Se limpian las variables a sus valores iniciales para comenzar un nuevo juego.

        amigo_n = '';

        LISTA = [];
        
        sorteo = Boolean(false);
        
        c = 0;
    }
}




