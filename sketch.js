var fixedRect, movingRect;
var bat, ball;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityX = -5;
  fixedRect.velocityX = +5;

bat = createSprite(400,200,20,60);
bat.shapeColor = "blue";
ball = createSprite(200,200,10,10);
ball.shapeColor = "blue";

ball.velocityX = 5;
}

function draw() {
  background(0,0,0);  
  bounceOff(ball,bat);
  drawSprites();
}

