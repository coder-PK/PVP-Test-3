var gameState = 0;
var bg, biker, biker_flip, bike, bullet1, bullet2, bullet3, bullet4;
var bikers_Array = [], allPlayers;
var player, playerCount=0, form, game;
var bullet;

function preload(){
  bg = loadImage("Images/bg.png")
  biker = loadImage("Images/bike.png")
  biker_flip = loadImage("Images/bike_flipped.png")
  biker_Gun = loadImage("Images/biker.png")
  bullet1 = loadImage("Images/bullet.jpg")
  bullet2 = loadImage("Images/bullet_up.jpg")
  bullet3 = loadImage("Images/bullet_down.jpg")
  bullet4 = loadImage("Images/bullet_left.jpg")
}
function setup(){
  createCanvas(displayWidth, displayHeight);
 

  biker1 = createSprite(500, 200);
  biker1.addImage(biker);
  biker2 = createSprite(980, 220);
  biker2.addImage(biker_flip);
  bikers_Array=[biker1,biker2];
 /* biker2.addImage(biker_flip);
  biker2.scale = 0.75;

  biker3 = createSprite(750, 600);
  biker3.addImage(bike);
  biker3.scale = 0.75;
*/  


  database = firebase.database();
  var pcref= database.ref('playerCount');
  pcref.on("value",(data)=>{
    playerCount=data.val();
  })
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  if (gameState === 0){
    background(bg);
    //drawSprites();
  }
  if (playerCount === 2){
    gameState = 1;
    game.update(1);
  }
  if (gameState === 1){
    background(bg);
    game.play();
  }
 
}