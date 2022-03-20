


var ground, ground_image
var edges
var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,180,20,20)
trex.addAnimation("running",trex_running)
trex.scale=0.5
edges = createEdgeSprites()
ground=createSprite(200,185,400,10)
ground.velocityX=-4
ground.x=ground.width/2
ground.addImage(ground_image)
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -10
  }
  if(ground.x<30){
    ground.x=ground.width/2
  }
  trex.velocityY = trex.velocityY + 0.8
  trex.collide(ground)
drawSprites()
}
 