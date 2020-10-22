var fixedReact , movingReact

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  fixedReact = createSprite(400,200,50,50);
  movingReact = createSprite()
}

function draw() {
  background(255,255,255);  
  drawSprites();
}