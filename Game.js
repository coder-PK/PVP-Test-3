class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
  async  start(){
   /*  var playerCountRef = await database.ref('playerCount').once("value");


        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
         
        } */
      if(gameState === 0){
        if (playerCount === 0){
          player = new Player(500, 200, biker);
         
        }
        /* else if (playerCount === 1){
          player = new Player(980, 220, biker_flip);
          console.log("player2 created")
       
        }
        else if (playerCount === 2){
          player = new Player(750, 600, biker_Gun);
          player.haveGun = true;
        //  player.update();
        } */
        
        form = new Form()
        form.display();
        playerCount=player.getCount();
      }
  
      
    }
  
    play(){
      form.hide();
      if (keyIsDown(RIGHT_ARROW)){
        player.biker.x = player.biker.x + 5;
        game.writePosition(player.biker.x, player.biker.y);
      }
      
      
      else if (keyIsDown(LEFT_ARROW)){
        //player.biker.velocityX = -5;
        player.biker.x = player.biker.x - 5;
        player.biker.addImage(biker_flip);
        game.writePosition(player.biker.x, player.biker.y);

      }
      
      else if (keyIsDown(DOWN_ARROW)){
        player.biker.y = player.biker.y + 5;
        game.writePosition(player.biker.x, player.biker.y);
      }
      
      else if (keyIsDown(UP_ARROW)){
        player.biker.y = player.biker.y - 5;
        game.writePosition(player.biker.x, player.biker.y);
      }
      if(keyIsDown(87) || keyIsDown(119)){
      bullet = createSprite(player.biker.x, player.biker.y);
      bullet.addImage(bullet2);
      bullet.scale = 0.50;
      bullet.velocityY = -5;
      
        }
        if(keyIsDown(65) || keyIsDown(97)){
      bullet = createSprite(player.biker.x, player.biker.y);
      bullet.addImage(bullet4);
      bullet.scale = 0.50;
      bullet.velocityX = -5;
      
        }
        if(keyIsDown(83) || keyIsDown(115)){
          bullet = createSprite(player.biker.x, player.biker.y);
          bullet.addImage(bullet3);
          bullet.scale = 0.50;
          bullet.velocityY = 5;
          
            }
            if(keyIsDown(68) || keyIsDown(100)){
              bullet = createSprite(player.biker.x, player.biker.y);
              bullet.addImage(bullet1);
              bullet.scale = 0.50;
              bullet.velocityX = 5;
              
                }
        drawSprites();
      

      Player.getPlayerInfo();
     // console.log(allPlayers);
      if(allPlayers !== undefined){
        background(rgb(198,135,103));
        
        var index = 0;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          if (plr === "players"+player.index){
         
            bikers_Array[index-1].x = allPlayers[plr].x
            bikers_Array[index-1].y = allPlayers[plr].y
            camera.position.x = allPlayers[plr].x
            camera.position.y = allPlayers[plr].y
           
          }
          drawSprites();
          
        
        }
  
      }
     
 
      }
  
    end(){
      textSize(35);
      text("Game Ended", 200, 3900);
      fill(0, 102, 153);
      console.log(player.rank);
    }
    writePosition(x, y){
      var ref = database.ref("Players/players" + player.index)
      ref.update({
        x: x,
        y: y
      })
    }
  }