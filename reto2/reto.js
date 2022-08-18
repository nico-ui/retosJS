/*
Reglas:
1 piedra
2 papel
3 tigera 
*/

function juego(jugador){

    var computador = Math.ceil(Math.random()*3);

    switch(computador){
        case 1:
            computador = 'piedra';
            break;
        case 2:
            computador = 'papel';
            break;
        case 3:
            computador = 'tigera';
            break;
        default: console.log('var aleatoria: ', computador);
    }
    console.log("computador:", computador);

    switch(jugador){
        case 'piedra':
            if(computador == 'papel'){
                console.log("computador gana");
            }else if(computador == 'tigera'){
                console.log("jugador gana");
            }else{
                console.log("empate");
            }
            break;
        case 'papel':
            if(computador == 'piedra'){
                console.log("jugador gana");
            }else if(computador == 'tigera'){
                console.log("computador gana");
            }else{
                console.log("empate");
            }
            break;
        case 'tigera':
            if(computador == 'papel'){
                console.log("jugador gana");
            }else if(computador == 'piedra'){
                console.log("compuatdor gana");
            }else{
                console.log("empate");
            }
            break;
        default: console.log("Opcion invalida genius");
    }
}
juego('papel');