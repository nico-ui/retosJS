/*
Reglas:
1 piedra
2 papel
3 tigera 
*/

/* function computadorTira(){
    var computador = Math.ceil(Math.random()*3);
    if(computador == '1'){
        computador = 'piedra';
    }else if(computador == '2'){
        computador = 'papel';
    }else if(computador == '3'){
        computador = "tigera";
    }else{
        console.log('var aleatoria igual a: ', computador);
    }
    console.log("computador: ", computador);
} */

function juego(jugador){

    var computador = Math.ceil(Math.random()*3);
    if(computador == '1'){
        computador = 'piedra';
    }else if(computador == '2'){
        computador = 'papel';
    }else if(computador == '3'){
        computador = "tigera";
    }else{
        console.log('var aleatoria igual a: ', computador);
    }
    console.log("computador: ", computador);

    if(computador == 'piedra' && jugador == 'tigera'){
        return console.log("computador gana");
    }else if(computador == 'piedra' && jugador == 'papel'){
        return console.log("jugador gana");
    }else if(computador == 'papel' && jugador == 'tigera'){
        return console.log("jugador gana");
    }else if(computador == 'papel' && jugador == 'piedra'){
        return console.log("computador gana");
    }else if(computador == 'tigera' && jugador == 'papel'){
        return console.log("computador gana");
    }else if(computador == 'tigera' && jugador == 'piedra'){
        return console.log("jugador gana");
    }else{
        return console.log("Empate");
    }
}

juego('papel');
