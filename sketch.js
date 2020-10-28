
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball,ground1,wall1,wall2,wall3;
function setup() {
	createCanvas(800, 700);
    background("white");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    
	paperball = new paper(200,600,40);
    ground1 = new ground(400,650,800,20);
	wall1 = new dustbin(603,570,15,100);
	wall2 = new dustbin(676.7,613,130,15);
	wall3 = new dustbin(730,570,15,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperball.display();
  ground1.display();
  wall1.display();
  wall2.display();
  wall3.display();
  drawSprites();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paperball.body,paperball.body.position,{x:180,y:-310});

  
	}
}