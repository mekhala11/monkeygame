
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime = 0
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  createCanvas(600,400);
  
  ground = createSprite(200,380,1000,10)
  ground.velocityX = -1;
  ground.x = ground.width/2;
  
  monkey = createSprite(70,300,10,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  obstacleGroup = createGroup();
  FoodGroup = createGroup();
 
  
  

  
}


function draw() {
  
  background("white");
  
 
  
  if(gameState === PLAY){
    
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime = Math.ceil(frameCount / frameRate());
    text("Survival Time: " + survivalTime , 100,50);
    
    if (keyDown("space")){
     
     monkey.velocityY= -15;
     
     
   }
  
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
  
    
    
    

  
  if(ground.x <0){
    
    ground.x = 399;
    ground.x = ground.width/2;
   
  }
    
  
  } 
  
  

  
  spawnObstacles();
  spawnBananas();
  
 drawSprites();
}

function spawnObstacles(){
  
  if(frameCount % 300 === 0){
    
    obstacle = createSprite(600,360,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.velocityX = -6;
    obstacle.scale = 0.15;
    obstacle.lifetime = 300;
    
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    obstacleGroup.add(obstacle)
    
    
  }

  
  
}

function spawnBananas(){
  
 if(frameCount % 80 === 0){
  
   banana = createSprite(600,150,10,10);
   banana.addImage(bananaImage);
   banana.velocityX = -5;
   banana.scale = 0.15;
   banana.y = Math.round(random(120,200));
   banana.lifetime = 300;
   
   banana.depth = monkey.depth
   monkey.depth = monkey.depth + 1;
   
   FoodGroup.add(banana);
 }
 
}


