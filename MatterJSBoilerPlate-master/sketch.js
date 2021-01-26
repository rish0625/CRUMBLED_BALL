
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, crumpledBall;
var wall1, wall2, bottom;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400, 600, 800, 100);
	crumpledBall = new Ball(100, 400, 20);

	wall1 = new Box(580, 500, 25, 100);
	wall2 = new Box(720, 500, 25, 100);
	bottom = new Box(650, 540, 150, 25);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.display();
  crumpledBall.display();

  wall1.display();
  wall2.display();
  bottom.display();

  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(crumpledBall.body, crumpledBall.body.position, {x: 3, y: -3});
	}
}



