// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Autor: Holman Quintero Salazar
 ALURA_latam
 Repositorio del Challenge Amigo secreto. ALURA Latam. Principiante en Programación G9 - ONE.
 */




let amigo_n = ''; // Declaracion de la variable amigo cada vez que se hace click en el boton añadir

var LISTA = []; // Lista de amigos

let sorteo = Boolean(false); // Variable sorteo que indica hasta cuando se siguen recibiendo entradas para los amigos

let c = 0; // Variable contador para el numero de entradas que recibira la caja de nombres

let elementoHTML;

let valorCaja;


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
        return 0;
    }
    if(nombre == ''){
        console.log('Se debe agregar un valor no nulo')
        return 1;
    }
    else{
        return 2;
    }
}

function Mayuscula_PrimeraLetra(nombre) { // Si la primera letra del nombre viene en minuscula esta funcion la convierte en mayuscula
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
  



function agregarAmigo(){


    if (sorteo == Boolean(false)){

        valorCaja = document.getElementById("resultado");
        valorCaja.innerHTML = '';

        amigo_n = document.getElementById('amigo').value;


        if (evaluar_nombre(amigo_n) == 0){
            alert('EL nombre solo puede contener letras');
        }
        if (evaluar_nombre(amigo_n) == 1){
            alert('Se debe agregar un valor no nulo');
        }
        if (evaluar_nombre(amigo_n) == 2){

            LISTA[c] = document.getElementById('amigo').value;
            LISTA[c] = Mayuscula_PrimeraLetra(LISTA[c]);
            console.log(LISTA);
            c++;

            valorCaja = document.querySelector('#amigo');
            valorCaja.value = '';
            valorCaja.placeholder = 'Escribe otro nombre o sortea si son mas de dos personas';
        }

        elementoHTML = document.getElementById("listaAmigos");
        elementoHTML.innerHTML = LISTA.join("<br>");
        
    }    
}

















function sortearAmigo(){

    sorteo = Boolean(true);

    n_entradas = LISTA.length;

    if (n_entradas <= 2){
        if(n_entradas == 0){
            console.log('No se ha agregado ningun nombre. Por favor agrega al menos 3');
            alert('No se ha agregado ningun nombre. Por favor agrega al menos 3');
            sorteo = Boolean(false);
        }
        if(n_entradas > 0 && n_entradas <= 2){
            console.log('Por favor agrega al menos 3 nombres');
            alert('Por favor agrega al menos 3 nombres');
            sorteo = Boolean(false);
        }
    }
    else{

        let aleatorio = Math.floor(Math.random() * (n_entradas + 1));
        console.log(aleatorio);

        amigo_secreto = LISTA[aleatorio]


        valorCaja = document.querySelector('#amigo');
        valorCaja.value = '';
        valorCaja.placeholder = 'Añade un nuevo nombre para jugar otra vez (nueva lista)';



        elementoHTML = document.getElementById("listaAmigos");
        elementoHTML.innerHTML = '';
        elementoHTML = document.getElementById("resultado");
        elementoHTML.innerHTML = "Tu amig@ secret@ es : " + amigo_secreto;



        amigo_n = '';

        LISTA = [];
        
        sorteo = Boolean(false);
        
        c = 0;
    }
}




