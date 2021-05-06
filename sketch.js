var mario, mario_running, mario_collided;
var bg;
var ground, groung_img;
var brick, brick_img;
var coin, coin_img;
var gameOver, gameOver_img;
var restart, restart_img;
var mushroom, mushroom_img;
var plant, plant_img;
var turtle, turtle_img;
var dino, dino_img;

function preload(){
  mario_running=loadAnimation("images/mario00.png","images/mario01.png","images/mario02.png","images/mario03.png");
  mario_collided=loadAnimation("images/collided.png");
  bg=loadImage("images/bg.png");
  ground_img=loadImage("images/ground2.png");
  brick_img=loadImage("images/brick.png");
  coin_img=loadImage("images/coin.png");
  gameOver_img=loadImage("images/gameOver.png");
  restart_img=loadImage("images/restart.png");
  mushroom_img=loadImage("images/mushroom.png");
  plant_img=loadAnimation("images/obstacle1.png","images/obstacle2.png","images/obstacle3.png","images/obstacle4.png");
  turtle_img=loadImage("images/turtle.png");
  dino_img=loadImage("images/turtle2.png");
}

function setup() {
  createCanvas(1300,500);
  ground=createSprite(650,460,1300,40);
  ground.addImage(ground_img);
  ground.velocityX=-2;
  ground.x=ground.width/2;
  ground.scale=1.5
}

function draw() {
  background(bg);  

  if(ground.x<400){
    ground.x=ground.width/2;
  }









  drawSprites();
}