// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

/* Autor: Holman Quintero Salazar
 ALURA_latam
 Repositorio del Challenge Amigo secreto. ALURA Latam. Principiante en Programación G9 - ONE.
 */




let amigo_n = ''; // Declaracion de la variable amigo cada vez que se hace click en el boton añadir

const lista = []; // Lista de amigos

function evaluar_nombre(nombre){ // Funcion que evalua si el nombre tiene caracteres especiales o numeros

    // Si el nombre viene con numeros o caracteres especiales se retorna el valor False, de lo contrario el valor es True

    if(nombre.includes('0') || nombre.includes('1') || nombre.includes('2') || nombre.includes('3')
    || nombre.includes('4') || nombre.includes('5') || nombre.includes('6') || nombre.includes('7')
    || nombre.includes('8') || nombre.includes('9') || nombre.includes('!') || nombre.includes('&')
    || nombre.includes('#') || nombre.includes('$') || nombre.includes('%') || nombre.includes('*')
    || nombre.includes('(') || nombre.includes(')') || nombre.includes('_') || nombre.includes('+')
    || nombre.includes('@') || nombre.includes('^') || nombre.includes('-') || nombre.includes('=')){
        console.log('El nombre solo debe contener letras')
        return Boolean(false);
    }
    else{
        return Boolean(true);
    }
}

function Mayuscula_PrimeraLetra(nombre) { // Si la primera letra del nombre viene en minuscula esta funcion la convierte en mayuscula
    return nombre.charAt(0).toUpperCase() + nombre.slice(1);
  }
  



function agregar_nombres(name){

    
}












for (let i = 0; i < 3; i++) {
    lista[i] = prompt('Ingresa nombre');
    while(evaluar_nombre(lista[i]) == Boolean(false)){
        alert('EL nombre solo debe contener letras');
        lista[i] = prompt('Ingresa nombre');
    }
    lista[i] = Mayuscula_PrimeraLetra(lista[i]);
  }


//lista[0] = prompt('Ingresa primer nombre')
//lista[1] = prompt('Ingresa segundo nombre')
//lista[2] = prompt('Ingresa tercer nombre') 


console.log(lista)














//function agregarAmigo() {
    //amigo_n = document.getElementById('amigo').value;
    //console.log(amigo_n)
    //let elementoHTML = document.getElementById('listaAmigos');
    //elementoHTML.innerHTML = amigo_n

    //lista_amigos++;

    //limpiar_caja();
    //return amigo_n;
//}

//console.log(amigo_n)


//function limpiar_caja(){
//    let inputElement = document.getElementById('amigo');
    //inputElement.setAttribute('placeholder', 'Escribe un nombre o sortea');
//}


// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let length = fruits.length;





//function sortearAmigo() {
    //alert("F2")
//}








