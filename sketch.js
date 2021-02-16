var playerCount;
var database;
var gameState= 0;


var form,player,game;

var allPlayers;
function setup(){
    createCanvas(400,400);
    database= firebase.database();

    game = new Game();
    game.getState();
    game.start();

  
}

function draw(){
    background("white");

    if(playerCount ===4){
        game.updateState(1);

    }

    if(gameState===1){
        clear();
        game.play();
    }

    

    
}








