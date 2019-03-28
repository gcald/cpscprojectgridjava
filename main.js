let player1_pos = 1;
let player2_pos = 64;

window.onload = function(){
    document.getElementById("player1").style.gridArea = "tile1";
    document.getElementById("player2").style.gridArea = "tile64";
}


function moveRight(player_num){
    if(player_num == 1){
        if(player1_pos != 64){
            player1_pos++;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos != 64){
            player2_pos++;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}

function moveLeft(player_num){
    if(player_num == 1){
        if(player1_pos != 1){
            player1_pos--;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos != 1){
            player2_pos--;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}

function moveUp(player_num){
    if(player_num == 1){
        if(player1_pos > 8){
            player1_pos = player1_pos - 8;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos > 8){
            player2_pos = player2_pos - 8;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}

function moveDown(player_num){
    if(player_num == 1){
        if(player1_pos < 57){
            player1_pos = player1_pos + 8;
            console.log(player1_pos);
            document.getElementById("player1").style.gridArea = `tile${player1_pos}`;
        }
    } else {
        if(player2_pos < 57){
            player2_pos = player2_pos + 8;
            console.log(player2_pos);
            document.getElementById("player2").style.gridArea = `tile${player2_pos}`;
        }
    }
}
