
var monkey,monkey_running,ground;
var banana,bananaImage,obstacle,obstacleImage;
var bananaGroup,obstacleGroup;
var survialTime=0;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("monkey",monkey_running);
monkey.scale=0.2;
  
ground=createSprite(400,380,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x);
  
obstacleGroup=new Group();
foodGroup=new Group();
}


function draw() {
  background("white");
  obstacle1();
  
drawSprites(); 
}
function obstacle1(){
 if(World.frameCount%200==0){
 obstacle=createSprite(200,350,20,20);
 obstacle.addImage(obstacleImage);
 obstacle.y=Math.round(random(350,350));
 obstacle.scale=0.2;
 obstacle.velocityX=-8;
 obstacle.setLifetime=100;
   
   obstacleGroup.add(obstacle);
 }
}
function food1(){
  if(World.frameCount%200==0){
    banana=createSprite(200,200,20,20);
    banana.addImage(bananaImage);
    banana.y=Math.round(random(120,200));
    banana.scale=0.2;
    banana.velocityX=-8;
    banana.setlifetime=100;

    bananaGroup.add(banana);
  }
}



