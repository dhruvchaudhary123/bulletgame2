var bullet,wall;
var thickness,speed,weight;


function setup() {
  createCanvas(1600,400);

   
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);

  bullet = createSprite(50,200,50,20);
  bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);
 
}

function draw() {
  background(0);  
  

 if(hascollided(bullet,wall))
 {
  bullet.velocityX=0;
  var damage=0.5 *weight * speed * speed/(thickness * thickness* thickness);
 console.log(damage);
  if(damage>10)
  {
     wall.shapeColor="green";
  }
   
  if(damage<10)
 {
    wall.shapeColor="red";
 }


 }
  




drawSprites();
}


function hascollided(lbullet,lwall)
{

  bulletReightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletReightEdge>=wallLeftEdge)
  {
     return true;
  }
  return false;
}