class Game{


    constructor(){ }


    getState(){

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data){
            gameState = data.val();
        })
    }
    

    updateState(state){
        database.ref("/").update({
            gameState: state
        })
        
    }

    //gamestate 0
    start(){

        if(gameState === 0 ){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }


    //gamestate 1
    play(){

        //expected output
        //p1 : 0
        //p2 : 0

        form.hide();
        Player.getPlayerInfo();

        
        if(allPlayers !== undefined){
            var displayPosition= 150;
            
            for(var plr in allPlayers){


                if(plr === "player" + player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }

                displayPosition +=20;
                textSize(20);
                text(allPlayers[plr].name+ " : "  +allPlayers[plr].distance, 120, displayPosition)
            }
        }

        if(keyIsDown(UP_ARROW) && player.index !== null){
            player.distance += 20;
            player.update();
        }
    }


    //gamestate 2
    end(){}


}