var canvas;
var music;
var movingball;
var redSurface,blueSurface,pinkSurface,yellowSurface; 
var topBoundry;
var bottomBoundry;
var rightBoundry;
var leftBoundry;

function preload(){
  jumpingSound= loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingball = createSprite(random(20,750));
    movingball.shapeColor = "white";
    movingball.velocityX = 6;
    movingball.velocityY = 6;

    redSurface = createSprite(100, 500, 160, 35);
    redSurface.shapeColor = "red";
    
    blueSurface= createSprite(300, 500, 160, 35);
    blueSurface.shapeColor = "blue";
  
    pinkSurface= createSprite(500, 500, 160, 35);
    pinkSurface.shapeColor = "pink";
  
    yellowSurface= createSprite(700, 500, 160, 35);
    yellowSurface.shapeColor = "yellow";
   
    topBoundry= createSprite(400,1,800,5);
    bottomBoundry= createSprite(400,599,800,5);
    rightBoundry= createSprite(1,300,1,800);
    leftBoundry= createSprite(799,300,1,800);
    
}

function draw() {
 background(rgb(169,169,169));

 isTouching(movingball,redSurface,blueSurface,pinkSurface,yellowSurface);

 bounceOff(movingball,redSurface,blueSurface,pinkSurface,yellowSurface,topBoundry,rightBoundry,leftBoundry);


 drawSprites();
  
}

function isTouching(movingball,redSurface,blueSurface,pinkSurface,yellowSurface)
{
if(redSurface.isTouching(movingball))
{
  movingball.shapeColor = "red";

  jumpingSound.play();

}

if(pinkSurface.isTouching(movingball))
{
  movingball.shapeColor = "pink";
  
  jumpingSound.play();
 
}

if(blueSurface.isTouching(movingball))
{
  movingball.shapeColor = "blue";
  movingball.velocityX = 0;
  movingball.velocityY = 0;
 
  jumpingSound.stop();
}

if(yellowSurface.isTouching(movingball))
{
  movingball.shapeColor = "yellow";
 
  jumpingSound.play();
  
}
}

 

function bounceOff(movingball,redSurface,blueSurface,pinkSurface,yellowSurface,topBoundry,rightBoundry,leftBoundry)
{
  
movingball.bounceOff(redSurface);

movingball.bounceOff(blueSurface);

movingball.bounceOff(pinkSurface);

movingball.bounceOff(yellowSurface);

movingball.bounceOff(topBoundry);

movingball.bounceOff(rightBoundry);

movingball.bounceOff(leftBoundry);

}
