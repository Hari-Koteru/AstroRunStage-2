var spaceImg,space;
var astronaut,astronautRunning;
var invisibleGround
var obstacles, obstacles_1,obstacles_2, obstacles_3,obstaclesGroup;
function preload(){
  spaceImg = loadImage("Space.png");
  astronautRunning = loadImage("Astronaut_Running.gif");

  obstacles_1 = loadImage("obstacle1.png");
  obstacles_2 = loadImage("AstroRunBedRock.png");
  obstacles_3 = loadImage("AstroRunCoin.png");
  
}

function setup() {
  createCanvas(900, 500);

  //create a space sprite
  space = createSprite(50, 300, 900, 500);
  space.addImage(spaceImg);
  space.x = space.width /2;
  
  astronaut = createSprite(50,350,20,20);
  astronaut.addImage(astronautRunning);
  astronaut.scale = 0.2;

  invisibleGround = createSprite(50,500,900,50);
  invisibleGround.visible = false;

  obstaclesGroup = new Group();

}

function draw() {
  background("black");

  space.velocityX = -2

  if (space.x<0){
    space.x = space.width/2;
  }

 
  if(keyDown("space")){
    astronaut.velocityY = -10;
  }
  
  astronaut.velocityY = astronaut.velocityY + 0.8;

  astronaut.collide(invisibleGround);

  spawnobstacle();

  drawSprites();
}

function spawnobstacle(){
  if(frameCount%60 === 0){
    obstacles = createSprite(900,300,60,60);
    //obstacles.addImage(obstacles_1);
    obstacles.x = Math.round(random(800,550));
    obstacles.y = Math.round(random(80,120));
    obstacles.velocityX = -4;
    obstacles.velocityY = Math.round(random(-3,3));


    var rand = Math.round(random(1,3));
    switch(rand) {
      case 1: obstacles.addImage(obstacles_1);
              break;
      case 2: obstacles.addImage(obstacles_2);
              break;
      case 3: obstacles.addImage(obstacles_3);
              break;
      
      default: break;
    }

    obstacles.scale = 0.03;
    
     //assign lifetime to the variable
    obstacles.lifetime = 300;
    obstaclesGroup.add(obstacles);
    
    
  }

}