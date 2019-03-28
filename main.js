let player1_pos = 1;
let player2_pos = 64;

window.onload = function(){
    document.getElementById("player1").style.gridArea = "tile1";
    document.getElementById("player2").style.gridArea = "tile64";
}

document.addEventListener('keydown', function(event){
    if(event.key == "d"){
        moveRight(1);
    }
    if(event.key == "w"){
        moveUp(1);
    }
    if(event.key == "a"){
        moveLeft(1);
    }
    if(event.key == "s"){
        moveDown(1);
    }
    if(event.key == "l"){
        moveRight(2);
    }
    if(event.key == "i"){
        moveUp(2);
    }
    if(event.key == "j"){
        moveLeft(2);
    }
    if(event.key == "k"){
        moveDown(2);
    }
});

function moveRight(player_num){
    if(player_num == 1){
        if(player1_pos != 64 && player1_pos + 1 != player2_pos){
            player1_pos++;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos != 64 && player2_pos + 1 != player1_pos){
            player2_pos++;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}

function moveLeft(player_num){
    if(player_num == 1){
        if(player1_pos != 1 && player1_pos - 1 != player2_pos){
            player1_pos--;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos != 1  && player2_pos - 1 != player1_pos){
            player2_pos--;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}

function moveUp(player_num){
    if(player_num == 1){
        if(player1_pos > 8 && player1_pos - 8 != player2_pos){
            player1_pos = player1_pos - 8;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos > 8 && player2_pos - 8 != player1_pos){
            player2_pos = player2_pos - 8;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}

function moveDown(player_num){
    if(player_num == 1){
        if(player1_pos < 57 && player1_pos + 8 != player2_pos){
            player1_pos = player1_pos + 8;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos < 57 && player2_pos + 8 != player1_pos){
            player2_pos = player2_pos + 8;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}
