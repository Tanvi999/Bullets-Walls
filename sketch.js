
var bullet, wall, speed, weight, thickness;

function setup() {
 createCanvas(1600,400);
  
 bullet = createSprite(50, 200, 50,20);
 bullet.shapeColor = "white"

 thickness = random(22,83);

 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = color(80,80,80);

 speed = random(223,321);

 weight = random(30,52);

 bullet.velocityX = speed;
}

function draw() {
  background(0);  

 if(wall.x-bullet.x <= wall.width/2 + bullet.width/2)
 {
  bullet.velocityX = 0;
  var deform = (0.5*weight*speed*speed)/(3*thickness)
  if(deform < 10)
  {
   wall.shapeColor = "green";
  }
  else if(deform >10)
  {
   wall.shapeColor = "red";
  }
 }
 drawSprites();
}




