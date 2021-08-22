var ship, ship_sailing, edges;
var seaImage
var sea

function preload(){
  ship_sailing = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(600,600);
//
sea = createSprite(50,170,600,50);
sea.addAnimation("water",seaImage);
  ship = createSprite(100,200,20,50);
ship.addAnimation("sailing", ship_sailing);

//
ship.scale = 0.1;
sea.scale=0.2
sea.velocityX=-4




}

function draw() {
  background("white");
//
if(sea.x<0){
  sea.x = sea.width/2
}
drawSprites()
}