const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5;
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob(160,200,2);
	bob2 = new Bob(180,200,2);
	bob3 = new Bob(200,200,2);
	bob4 = new Bob(220,200,2);
	bob5 = new Bob(240,200,2);

	
	rope1 = new Rope(bob1.body,roof.body,bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,bobDiameter*2,0);
	rope3 = new Rope(bob3.body,roof.body,bobDiameter*2,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*2,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

    roof = new Roof(200,100,100,20);



	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background(0);
  


  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  roof.display();

  


  drawSprites();
 
}