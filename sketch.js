
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paper;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
  

	Engine.run(engine);
	ground = new Ground(600,380,1200,20);
    paper = new Paper(20,20,20);
	dustbinObj=new dustbin(1200,650);
}


function draw() {
  rectMode(CENTER);
  background(0);
 ground.display();
 paper.display();
 dustbinObj.display();
 keyPressed();


  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  
	}
}




